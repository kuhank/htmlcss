const http = require('http');
const server = http.createServer((req, res) => {
    console.log("Received request:", req.method, req.url);  
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2>Hello World</h2>');
}
);

const host = 'localhost';
const port = 8000;

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
}
);
