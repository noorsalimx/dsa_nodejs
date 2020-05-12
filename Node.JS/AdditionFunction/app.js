//Add two numbers using process.argv

// console.log(process.argv);

function add() {
  let sum = 0;
  for (i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
  }

  /* for (let num of process.argv) {
    sum += num;
  } */

  return sum;
}

console.log(add());

/* Run this function --> node app.js 4 5 6
This will return 4+5+6=15
 */
