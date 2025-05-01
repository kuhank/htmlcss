const net = require('net');
const server = net.createServer((socket) => {
    socket.on('close', () => {
        console.log('Client disconnected');
    }
    );
});
server.listen(8000);
console.log('Server is listening on port 8000');
server.close(() => {
    console.log('Server is closed');
}
);
