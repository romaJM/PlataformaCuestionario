// test-http2.js
const http2 = require('http2');

const client = http2.connect('https://localhost:3443', {
  rejectUnauthorized: false // ignora certificado autofirmado
});

const req = client.request({ ':path': '/' });

req.on('response', (headers) => {
  console.log('HTTP/2 headers:', headers);
});

req.setEncoding('utf8');
let data = '';
req.on('data', chunk => data += chunk);
req.on('end', () => {
  console.log('Body:', data);
  client.close();
});
req.end();
