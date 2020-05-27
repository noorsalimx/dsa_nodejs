const fs = require("fs");
const data = "Node.js is an ultimate backend javascript for backend development\n";
const n = Math.pow(10, 5);

// Create a writable stream
const writerStream = fs.createWriteStream("Big_data.txt");

// Write the data to stream with encoding to be utf8
for (let i = 1; i < n; i++) {
  writerStream.write(data, "UTF8");
}

// Mark the end of file
writerStream.end();
