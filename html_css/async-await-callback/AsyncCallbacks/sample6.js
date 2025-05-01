const fs = require('fs');
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));

fs.readFile('file.txt', () => console.log('file done'));

console.log('start');
