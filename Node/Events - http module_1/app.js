const http = require("http");
const port = 8000;

let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello World");
  res.end();
});

server.listen(port);

console.log(`App is started on ${port}`);
