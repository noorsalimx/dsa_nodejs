/* add two number using readline core module */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the first number : ", (answer1) => {
  rl.question("Please enter the second number : ", (answer2) => {
    var result = +answer1 + +answer2;
    console.log(`The sum of above two numbers is ${result}`);
    rl.close();
  });
});
