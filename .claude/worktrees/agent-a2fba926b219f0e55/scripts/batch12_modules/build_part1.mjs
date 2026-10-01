import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TAXONOMIA } from "./taxonomia.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Transito 01: 25 questoes (Normas de Circulacao, Sinalizacao, Competencias)
// Transito 02: 25 questoes (Crimes de Transito arts 302-312-B, Infracoes graves/gravissimas)
// Criminologia 01: 25 questoes (Escolas Criminologicas Classica, Positiva, Sociologicas, Critica)
// Criminologia 02: 25 questoes (Prevencao Primaria/Secundaria/Terciaria e Vitimologia)
// Info 01: 25 questoes (Redes, Nuvem, Seguranca, Criptografia, SIEM, Malware)
// Info 02: 25 questoes (Bancos de dados SQL/NoSQL, SO Linux/Windows, Suites Escritorio)

console.log("Gerando Módulos Parte 1 (Trânsito 01/02, Criminologia 01/02, Info 01/02)...");
