const fs = require('node:fs');
const path = require('node:path');
const exporter = require('../assets/docx-export.js');

const sections = Array.from({ length: 18 }, (_, index) => [
  `${index + 1} SEÇÃO DE TESTE ${index + 1}`,
  '',
  'Este parágrafo valida a paginação, a acentuação e a leitura do conteúdo exportado para o Microsoft Word e o LibreOffice.',
  '• Requisito obrigatório da contratação',
  '• Evidência necessária para instrução do processo',
  '',
]).flat().join('\n');

const bytes = exporter.buildDocxBytes({
  title: 'Script Gerador de ETP — CNJ 2026',
  subtitle: 'Documento de validação técnica | SEI 00000/2026',
  text: sections,
  accent: 'C8973A',
  createdAt: new Date('2026-08-16T12:00:00Z'),
});

const outputDir = path.join(__dirname, 'output');
fs.mkdirSync(outputDir, { recursive: true });
const outputFile = path.join(outputDir, 'sample-etp.docx');
fs.writeFileSync(outputFile, bytes);
process.stdout.write(`${outputFile}\n`);
