const EventEmitter = require("events");
const door = new EventEmitter();

function Myfunc() {
  console.log("HI THERE ! HAPPY LEARNING");
}

door.on("open", Myfunc);
door.emit("open");
