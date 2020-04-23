// Read File
function readFile() {
  const fs = require("fs");

  fs.readFile("Files/To_Read.txt", "UTF8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

module.exports = { readFile };
