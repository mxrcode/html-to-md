const fs = require('fs');
const TurndownService = require('turndown');

if (process.argv.length < 4) {
  console.error('Usage: ./html-to-md input.html output.md');
  process.exit(1);
}

const inputFilename = process.argv[2];
const outputFilename = process.argv[3];

const turndownService = new TurndownService();

// Read HTML content from the input file
const htmlContent = fs.readFileSync(inputFilename, 'utf8');

// Convert HTML to Markdown
const markdownContent = turndownService.turndown(htmlContent);

// Write the Markdown content to the output file
fs.writeFileSync(outputFilename, markdownContent, 'utf8');

console.log(`Conversion successful. Markdown content saved to ${outputFilename}`);