const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function splitPdf() {
  const inputPath = 'public/notes/GATE_2022_EC_Questions_Solutions_MadeEasy.pdf';
  const data = fs.readFileSync(inputPath);
  const pdfDoc = await PDFDocument.load(data);
  const totalPages = pdfDoc.getPageCount();
  console.log('Total pages:', totalPages);

  // Part 1: Pages 1 to 28 (indices 0 to 27)
  const part1Doc = await PDFDocument.create();
  const part1Pages = await part1Doc.copyPages(pdfDoc, Array.from({ length: 28 }, (_, i) => i));
  part1Pages.forEach(page => part1Doc.addPage(page));
  const part1Bytes = await part1Doc.save();
  fs.writeFileSync('public/notes/GATE_2022_EC_Solutions_MadeEasy_Part1.pdf', part1Bytes);
  console.log('Part 1 saved, size:', (part1Bytes.length / 1024 / 1024).toFixed(2), 'MB');

  // Part 2: Pages 29 to 55 (indices 28 to 54)
  const part2Doc = await PDFDocument.create();
  const part2Pages = await part2Doc.copyPages(pdfDoc, Array.from({ length: totalPages - 28 }, (_, i) => i + 28));
  part2Pages.forEach(page => part2Doc.addPage(page));
  const part2Bytes = await part2Doc.save();
  fs.writeFileSync('public/notes/GATE_2022_EC_Solutions_MadeEasy_Part2.pdf', part2Bytes);
  console.log('Part 2 saved, size:', (part2Bytes.length / 1024 / 1024).toFixed(2), 'MB');

  // Delete the large un-split file
  fs.unlinkSync(inputPath);
  console.log('Original large file removed.');
}

splitPdf().catch(console.error);
