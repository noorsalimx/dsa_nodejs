const fs = require("fs");

let stream = fs.createReadStream("Node-stream-handson/data_file.txt");

stream.on("data", function (data) {
  let chunk = data.toString();
  console.log(chunk.length);
});
