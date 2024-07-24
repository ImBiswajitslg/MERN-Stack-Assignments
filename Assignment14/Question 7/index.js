const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const filePath = 'Hello.txt';
const contentToAdd = '\nAppended content';

async function appendToFile() {
  try {
    const originalContent = await readFileAsync(filePath, 'utf8');
    console.log('Original content:', originalContent);

    const newContent = originalContent + contentToAdd;
    await writeFileAsync(filePath, newContent, 'utf8');

    const updatedContent = await readFileAsync(filePath, 'utf8');
    console.log('Updated content:', updatedContent);
  } catch (error) {
    console.error('Error:', error);
  }
}

appendToFile();
