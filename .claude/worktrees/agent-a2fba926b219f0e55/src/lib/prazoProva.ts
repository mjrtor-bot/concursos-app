export type SituacaoPrazoProva = "sem_data" | "futura" | "hoje" | "realizada";

export interface PrazoProva {
  situacao: SituacaoPrazoProva;
  dias: number | null;
}

function criarDataLocal(data: string): Date | null {
  const dataSemHorario = data.slice(0, 10);
  const correspondencia = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dataSemHorario);

  if (correspondencia) {
    const [, ano, mes, dia] = correspondencia;
    const resultado = new Date(Number(ano), Number(mes) - 1, Number(dia));
    return Number.isNaN(resultado.getTime()) ? null : resultado;
  }

  const resultado = new Date(data);
  return Number.isNaN(resultado.getTime()) ? null : resultado;
}

function inicioDoDia(data: Date): Date {
  return new Date(data.getFullYear(), data.getMonth(), data.getDate());
}

export function calcularPrazoProva(
  dataProva?: string | null,
  referencia: Date = new Date()
): PrazoProva {
  if (!dataProva) return { situacao: "sem_data", dias: null };

  const prova = criarDataLocal(dataProva);
  if (!prova) return { situacao: "sem_data", dias: null };

  const hoje = inicioDoDia(referencia);
  const dataDaProva = inicioDoDia(prova);
  const dias = Math.round((dataDaProva.getTime() - hoje.getTime()) / 86_400_000);

  if (dias < 0) return { situacao: "realizada", dias };
  if (dias === 0) return { situacao: "hoje", dias };
  return { situacao: "futura", dias };
}
