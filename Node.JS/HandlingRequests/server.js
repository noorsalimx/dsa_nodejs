const http = require("http");
const url = require("url");
const port = process.env.PORT || 3000;

function startServer(route) {
  const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Application started from app module. ");
    console.log(`Request received for : ${url.parse(req.url).pathname}`);
    res.write(`Request received for : ${url.parse(req.url).pathname}`);
    res.end();
  });

  server.listen(port, () => {
    console.log(`App started on ${port}`);
  });
}

module.exports = { startServer };
