// Timer1
// Write a simple code snippet to log TCS every 5 seconds, once the server is started.

function message() {
  console.log("TCS");
}

setInterval(message, 5000);

// Timer2
// Write a function to log TCS 2 seconds after the server is started.

function message() {
  console.log("TCS");
}
setTimeout(message, 2000);
