process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function vowelsAndConsonants(s) {
  let v = [];
  let c = [];
  [...s].forEach((l) => {
    if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u') v.push(l);
    else c.push(l);
  });
  v.forEach((l) => {
    console.log(l);
  });
  c.forEach((l) => {
    console.log(l);
  });
}

function main() {
  const s = readLine();
  vowelsAndConsonants(s);
}
