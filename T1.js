// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var stdin_input = '';

process.stdin.on('data', function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on('end', function () {
  main(stdin_input);
});

function main(input) {
  // process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
  let f = 0;
  let r = input.length - 1;

  if (input[f++] == input[r--]) console.log('YES');
  else console.log('NO');
}
