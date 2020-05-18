const http = require("http");
const url = require("url");
const port = process.env.PORT || 3000;

function startServer(handler, route) {
  const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Application started from app module. ");
    const path = url.parse(req.url).pathname;
    console.log("Request received for :", path);
    route(handler, path);
    res.write(`Request received for : ${url.parse(req.url).pathname}`);
    res.end();
  });

  server.listen(port, () => {
    console.log(`App started on ${port}`);
  });
}

module.exports = { startServer };
