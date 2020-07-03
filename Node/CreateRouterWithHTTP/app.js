const http = require("http");
const host = "127.0.0.1";
const port = 3000;

let server = http.createServer(function (req, res) {
  //create web server
  if (req.url == "/hi") {
    //check the URL of the current request
    // set response header
    res.writeHead(200, { "Content-Type": "text/html" });

    // set response content
    res.write(`Url is 'http://127.0.0.1:3000${req.url}'`);
    res.end();
  } else if (req.url == "/hello") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`Url is 'http://127.0.0.1:3000${req.url}'`);
    res.end();
  } else res.end("Invalid Request!");
});

server.listen(port, host);

console.log(`App is started on ${port}`);
