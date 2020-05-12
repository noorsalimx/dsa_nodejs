function color() {
  console.log("Car color is green");
}

function brand() {
  console.log("Car brand is BMW");
}

// Read File

function readFile() {
  const fs = require("fs");

  fs.readFile("File/To_Read.txt", "UTF8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

// Event Emitter

const event = require("events");
const door = new event.EventEmitter();

function Myfunc() {
  console.log("HI THERE ! HAPPY LEARNING");
}

door.on("open", Myfunc);
door.emit("open");

module.exports = { color, brand, readFile, Myfunc };
