import fs from 'fs';
import { PDFParse } from 'pdf-parse';

async function main() {
  try {
    const dataBuffer = fs.readFileSync('e:/GATE/EC_GATE2027_Syllabus.pdf');
    const parser = new PDFParse({ data: dataBuffer });
    const textResult = await parser.getText();
    console.log('=== SYLLABUS TEXT ===');
    console.log(textResult.text);
    await parser.destroy();
  } catch (e) {
    console.error('Error parsing:', e);
  }
}

main();
