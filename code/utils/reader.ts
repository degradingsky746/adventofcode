import * as fs from 'fs';
import * as readline from 'readline';

async function processFileLineByLine(filePath: string, handler: Function): Promise<void> {
  // Create a readable stream from the file
  const fileStream = fs.createReadStream(filePath);

  // Create a readline interface
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // To handle both \r\n and \n line endings
  });

  // Process each line
  for await (const line of rl) {
    handler(line);
    console.log('Processing line:', line);
  }
}

export { processFileLineByLine };