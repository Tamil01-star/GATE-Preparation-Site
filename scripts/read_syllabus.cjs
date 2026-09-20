const fs = require('fs');
const pdf = require('pdf-parse');

async function main() {
  try {
    const dataBuffer = fs.readFileSync('e:/GATE/EC_GATE2027_Syllabus.pdf');
    const data = await pdf(dataBuffer);
    console.log('=== SYLLABUS PAGES: ' + data.numpages + ' ===');
    console.log(data.text);
  } catch (e) {
    console.error('Error:', e);
  }
}

main();
