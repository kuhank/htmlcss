
// server.js
const express = require('express');
const app = express();

const host = 'localhost';
const port = 8000;

app.get('/', (req, res) => {
    console.log("Received request:", req.method, req.url);
    res.send('<h2>Hello World</h2>');
});

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
