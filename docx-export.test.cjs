const assert = require('node:assert/strict');
const test = require('node:test');
const exporter = require('../assets/docx-export.js');

test('gera um pacote DOCX com os componentes obrigatórios', () => {
  const bytes = exporter.buildDocxBytes({
    title: 'Script Gerador de ETP — CNJ 2026',
    subtitle: 'Objeto de teste | SEI 00000/2026',
    text: '1 CONTEXTO\n\nTexto com acentuação: contratação.\n• Item obrigatório',
    accent: 'C8973A',
    createdAt: new Date('2026-08-16T12:00:00Z'),
  });

  assert.ok(bytes instanceof Uint8Array);
  assert.equal(String.fromCharCode(...bytes.slice(0, 2)), 'PK');

  const archiveText = new TextDecoder().decode(bytes);
  for (const entry of [
    '[Content_Types].xml',
    'word/document.xml',
    'word/styles.xml',
    'word/numbering.xml',
    'docProps/core.xml',
  ]) {
    assert.match(archiveText, new RegExp(entry.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
  assert.match(archiveText, /Texto com acentuação: contratação\./);
  assert.match(archiveText, /w:numId w:val="1"/);
});

test('classifica títulos e listas do script', () => {
  assert.deepEqual(exporter.classifyLine('1 CONTEXTO'), { style: 'Heading1', text: '1 CONTEXTO' });
  assert.deepEqual(exporter.classifyLine('• Requisito'), { style: 'Bullet', text: 'Requisito' });
  assert.deepEqual(exporter.classifyLine('Texto normal.'), { style: 'Normal', text: 'Texto normal.' });
});

test('sanitiza o nome do arquivo', () => {
  assert.equal(exporter.sanitizeFilename('SEI nº 03.847/2025'), 'sei-n-03.847-2025');
});
