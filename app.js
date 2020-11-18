const serve = require('serve');
const http = require('http');

const server = http.createServer((request, response) => {
  return handler(request, response);
})

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});
