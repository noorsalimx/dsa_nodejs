const fs = require("fs");

fs.readFile("Node-read-handson/To_Read.txt.txt", "UTF8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
