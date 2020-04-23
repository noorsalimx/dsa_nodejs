const events = require("events");
const MyEvent = new events.EventEmitter();

function Myfunc() {
  console.log("HI THERE ! HAPPY LEARNING");
}

MyEvent.on("open", Myfunc);
MyEvent.emit("open");
