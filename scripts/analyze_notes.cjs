const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const notesDir = 'e:/GATE/NOTES';

async function analyze() {
  const files = fs.readdirSync(notesDir);
  console.log(`Found ${files.length} files in ${notesDir}`);

  for (const file of files) {
    if (!file.endsWith('.pdf')) continue;
    const fullPath = path.join(notesDir, file);
    try {
      const dataBuffer = fs.readFileSync(fullPath);
      // Read only first page or 1000 characters
      const data = await pdf(dataBuffer, { max: 2 });
      console.log('====================================');
      console.log(`FILE: ${file} | Total Pages: ${data.numpages}`);
      const snippet = data.text.replace(/\s+/g, ' ').slice(0, 300);
      console.log(`SNIPPET: ${snippet}`);
    } catch (e) {
      console.log(`FILE: ${file} | Error: ${e.message}`);
    }
  }
}

analyze();
