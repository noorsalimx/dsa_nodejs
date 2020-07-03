const http = require("http");
const fs = require("fs");
const port = 3000;

let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("Sample.html", "UTF8", (err, data) => {
    // console.log(data);
    res.write(data);
    res.end();
  });
});

server.listen(port);

console.log(`App is started on ${port}`);
