const http = require('http');
const fs = require('fs');
const port = 3000

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Hello World');
  fs.readFile('/body_of_website/aliases _game/instruction.html', function(error, data) {
    if (error) {
        res.writeHead(404)
        res.write('Error: File Not Found or Requested')
    } else{
        res.write(data)

    }
    res.end()
  })

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/'); 