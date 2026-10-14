import { NextResponse } from "next/server";
import { Pool } from "pg";
import { createHash, randomUUID } from "node:crypto";
import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { PDFParse } from "pdf-parse";
import { detectarEExtrair, resumirProposta } from "@/lib/editais/detectarEExtrair";

// Upload de edital em PDF para a instalação Contabo (sem Supabase e sem OpenAI).
// Salva o arquivo no storage local, extrai o conteúdo programático com o extrator
// determinístico e grava o registro como rascunho (aguardando_revisao) ou como
// revisao_sem_conteudo quando o formato não é reconhecido com segurança.

const MAX_BYTES = 20 * 1024 * 1024;
const STATUS_ATIVOS = ["processando", "aguardando_revisao", "revisao_sem_conteudo", "confirmado", "aguardando_processamento"];
const COOKIE_SESSAO = "mentoria_homologacao_session";
const CABECALHOS = { "Cache-Control": "private, no-store" };

function nomeSeguro(nome: string): string {
  const base = nome.replace(/[^a-zA-Z0-9._-]/g, "_").replace(/_+/g, "_");
  return base.toLowerCase().endsWith(".pdf") ? base : base + ".pdf";
}

function lerCookie(req: Request, nome: string): string | null {
  const bruto = req.headers.get("cookie") || "";
  for (const parte of bruto.split(";")) {
    const i = parte.indexOf("=");
    if (i < 0) continue;
    if (parte.slice(0, i).trim() === nome) {
      try {
        return decodeURIComponent(parte.slice(i + 1).trim());
      } catch {
        return parte.slice(i + 1).trim();
      }
    }
  }
  return null;
}

function json(corpo: Record<string, unknown>, status: number) {
  return NextResponse.json(corpo, { status, headers: CABECALHOS });
}

export async function contaboUpload(request: Request): Promise<NextResponse> {
  const token = lerCookie(request, COOKIE_SESSAO);
  if (!token) return json({ error: "Não autenticado" }, 401);
  if (!process.env.CONTABO_DATABASE_URL) return json({ error: "Banco indisponível" }, 503);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: "Falha ao ler o upload. Envie um PDF de até 20 MB." }, 400);
  }
  const file = form.get("arquivo");
  if (!(file instanceof File)) return json({ error: "PDF obrigatório" }, 400);
  if (file.type !== "application/pdf" || !file.name.toLowerCase().endsWith(".pdf")) {
    return json({ error: "Envie somente arquivo PDF válido." }, 415);
  }
  if (file.size <= 0 || file.size > MAX_BYTES) return json({ error: "O PDF deve ter no máximo 20 MB." }, 413);

  const bytes = Buffer.from(await file.arrayBuffer());
  if (bytes.length < 5 || bytes.subarray(0, 5).toString("latin1") !== "%PDF-") {
    return json({ error: "O conteúdo enviado não possui assinatura de PDF." }, 415);
  }

  const nomeArquivo = nomeSeguro(file.name);
  const hashArquivo = createHash("sha256").update(bytes).digest("hex");
  const hashSessao = createHash("sha256").update(token).digest("hex");
  const db = new Pool({ connectionString: process.env.CONTABO_DATABASE_URL, max: 1 });
  let caminhoGravado: string | null = null;

  try {
    const auth = await db.query(
      "SELECT u.id FROM mentoria_auth.sessions s JOIN mentoria_auth.users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.revoked_at IS NULL AND s.expires_at>now() AND u.disabled_at IS NULL",
      [hashSessao]
    );
    if (!auth.rowCount) return json({ error: "Não autenticado" }, 401);
    const usuarioId = String(auth.rows[0].id);
    if (!/^[0-9a-f-]{36}$/i.test(usuarioId)) return json({ error: "Identificador de usuário inválido" }, 500);

    // Deduplicação: mesmo usuário, mesmo nome e mesmo tamanho de arquivo.
    const existente = await db.query(
      "SELECT id,nome,status,created_at FROM mentoria_recovery.editais_usuario WHERE usuario_id=$1 AND arquivo_nome=$2 AND arquivo_tamanho=$3 AND status = ANY($4::text[]) ORDER BY created_at DESC LIMIT 1",
      [usuarioId, nomeArquivo, file.size, STATUS_ATIVOS]
    );
    if (existente.rowCount) {
      const ed = existente.rows[0];
      return json(
        {
          edital: ed,
          edital_usuario_id: ed.id,
          deduplicated: true,
          status: ed.status,
          hash: hashArquivo,
          fonte: "contabo",
          message: "Este arquivo já foi enviado antes. Abra Meus Editais Importados para ver o resultado.",
        },
        200
      );
    }

    // Extração do texto e do conteúdo programático.
    let texto = "";
    let aviso: string | null = null;
    try {
      const parser = new PDFParse({ data: new Uint8Array(bytes) });
      try {
        const resultado = await parser.getText();
        texto = resultado.text;
      } finally {
        await parser.destroy();
      }
    } catch (err) {
      console.error("[contabo-upload] leitura do PDF", err);
      aviso = "Não foi possível ler o texto do PDF.";
    }

    let status = "revisao_sem_conteudo";
    let estrutura: Record<string, unknown> = {};
    let resumo: ReturnType<typeof resumirProposta> | null = null;
    if (!aviso && texto.trim().length < 100) {
      aviso = "PDF sem texto selecionável. É necessário OCR.";
    } else if (!aviso) {
      const proposta = detectarEExtrair(texto);
      resumo = resumirProposta(proposta);
      if (proposta.gravavel) {
        status = "aguardando_revisao";
        estrutura = {
          disciplinas: proposta.disciplinas,
          observacoes: ["Conteúdo extraído automaticamente do PDF. Revisar antes de confirmar."],
          extracao_automatica_contabo: { metodo: proposta.metodo, em: new Date().toISOString() },
        };
      } else {
        aviso = proposta.avisos.join(" ");
      }
    }

    // Gravação do arquivo no storage local (precisa de permissão de escrita).
    const raiz = path.resolve(process.env.CONTABO_EDITAIS_STORAGE_ROOT || "/opt/mentoria/storage/editais-usuario");
    const relativo = `${usuarioId}/${randomUUID()}-${nomeArquivo}`;
    const destino = path.resolve(raiz, relativo);
    if (!destino.startsWith(raiz + path.sep)) return json({ error: "Caminho de arquivo inválido" }, 400);
    try {
      await mkdir(path.dirname(destino), { recursive: true });
      await writeFile(destino, bytes, { flag: "wx" });
      caminhoGravado = destino;
    } catch (err) {
      const codigo = (err as NodeJS.ErrnoException)?.code;
      console.error("[contabo-upload] gravação do arquivo", err);
      if (codigo === "EROFS" || codigo === "EACCES" || codigo === "EPERM") {
        return json({ error: "O armazenamento de editais está somente leitura nesta instalação. Peça ao administrador para habilitar escrita." }, 503);
      }
      return json({ error: "Não foi possível gravar o arquivo no servidor." }, 500);
    }

    const nome = String(form.get("nome") || file.name.replace(/\.pdf$/i, "")).slice(0, 250);
    const orgao = String(form.get("orgao") || "").slice(0, 200) || null;
    const cargo = String(form.get("cargo") || "").slice(0, 200) || null;
    const uf = String(form.get("uf") || "").slice(0, 2).toUpperCase() || null;

    // A tabela não define valor padrão para id, created_at e updated_at.
    const inserido = await db.query(
      "INSERT INTO mentoria_recovery.editais_usuario (id,usuario_id,nome,orgao_nome,cargo,uf,arquivo_path,arquivo_nome,arquivo_tamanho,mime_type,status,estrutura_extraida,erro_processamento,created_at,updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,'application/pdf',$10,$11::jsonb,$12,now(),now()) RETURNING id,nome,status,created_at",
      [randomUUID(), usuarioId, nome, orgao, cargo, uf, relativo, nomeArquivo, file.size, status, JSON.stringify(estrutura), aviso]
    );
    const registro = inserido.rows[0];
    caminhoGravado = null; // registro criado; o arquivo deve permanecer

    const mensagem =
      status === "aguardando_revisao"
        ? `PDF recebido e analisado automaticamente: ${resumo?.disciplinas ?? 0} disciplinas e ${resumo?.assuntos ?? 0} assuntos. Abra Meus Editais Importados e use Ver Verticalizado para revisar.`
        : `PDF armazenado, mas o conteúdo programático não foi identificado automaticamente. ${aviso ?? ""}`.trim();

    return json(
      {
        edital: registro,
        edital_usuario_id: registro.id,
        deduplicated: false,
        status,
        hash: hashArquivo,
        fonte: "contabo",
        proposta: resumo,
        message: mensagem,
      },
      201
    );
  } catch (err) {
    console.error("[contabo-upload]", err);
    if (caminhoGravado) await unlink(caminhoGravado).catch(() => undefined);
    return json({ error: "Falha ao salvar o edital." }, 500);
  } finally {
    await db.end();
  }
}
