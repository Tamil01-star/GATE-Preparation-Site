const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");

const ROOT = path.join(__dirname, "..");
const NOTES_DIR = path.join(ROOT, "public", "notes");
const OUT_DIR = path.join(ROOT, "scripts", "pdf-texts");

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const pdfs = fs.readdirSync(NOTES_DIR).filter(f => f.endsWith(".pdf"));

async function extractAll() {
  for (const pdf of pdfs) {
    const pdfPath = path.join(NOTES_DIR, pdf);
    const outPath = path.join(OUT_DIR, pdf.replace(".pdf", ".txt"));
    if (fs.existsSync(outPath)) { console.log("SKIP: " + pdf); continue; }
    try {
      console.log("Extracting: " + pdf + " ...");
      const dataBuffer = fs.readFileSync(pdfPath);
      const data = await pdfParse(dataBuffer);
      const output = "=== FILE: " + pdf + " ===\n=== PAGES: " + data.numpages + " ===\n\n" + data.text;
      fs.writeFileSync(outPath, output, "utf8");
      console.log("  Done. Pages: " + data.numpages + ", Chars: " + data.text.length);
    } catch (err) {
      console.error("  ERROR: " + pdf + " -> " + err.message);
    }
  }
  console.log("\nAll extractions complete!");
}

extractAll();
