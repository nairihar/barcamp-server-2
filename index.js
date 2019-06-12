const http = require('http');
const PORT = process.env.PORT || 8082;

http.createServer((req, res) => {
   console.log('BS2: request received');
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('Hello from Server 2');
}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}`);
