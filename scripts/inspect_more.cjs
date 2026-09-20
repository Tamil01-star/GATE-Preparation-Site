const fs = require('fs');
const pdf = require('pdf-parse');

async function inspect(file) {
  try {
    const dataBuffer = fs.readFileSync('e:/GATE/NOTES/' + file);
    const data = await pdf(dataBuffer, { max: 5 });
    console.log(`=== ${file} ===`);
    console.log(data.text.replace(/\s+/g, ' ').slice(0, 400));
  } catch (e) {
    console.log(`Error on ${file}: ${e.message}`);
  }
}

async function run() {
  await inspect('DOC-20260306-WA0009.pdf');
  await inspect('DOC-20260306-WA0011.pdf');
  await inspect('DocScanner 4 Feb 2026 5-23 pm.pdf');
}

run();
