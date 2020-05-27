const http = require("http");
const url = require("url");
const port = process.env.PORT || 3000;

function startServer(handler, route) {
  const server = http.createServer(function (req, res) {
    const path = url.parse(req.url).pathname;
    console.log("Request received for :", path);

    let reviewData = "";
    req.setEncoding("UTF-8");
    req.addListener("data", function (chunk) {
      reviewData += chunk;
    });

    req.addListener("end", function () {
      route(handler, path, res, reviewData);
    });

    /* res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(`Request received for : ${url.parse(req.url).pathname}`);
    res.end(); */
  });

  server.listen(port, () => {
    console.log(`App started on ${port}`);
  });
}

module.exports = { startServer };
