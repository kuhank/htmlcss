const fs = require('fs');
const filePath = 'sample.txt';
const content = 'Hello! This content is written in synchronous mode.\n';

// 1. Write to file in synchronous mode
try {
    fs.writeFileSync(filePath, content);
    console.log('File written successfully in synchronous mode.');
} catch (err) {
    console.error('Error writing file:', err);
}

// 2. Read from file in asynchronous mode
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('\nFile contents (read in async mode):\n', data);
});
