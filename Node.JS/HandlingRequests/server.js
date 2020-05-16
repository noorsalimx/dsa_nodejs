const http = require("http");
const port = process.env.PORT || 3000;

function startServer() {
  const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`Url is http://localhost:3000${req.url}`);
    res.end();
  });

  server.listen(port, () => {
    console.log(`App started on ${port}`);
  });
}

module.exports = { startServer };
