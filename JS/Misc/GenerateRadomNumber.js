function generateRandomNumber() {
  let n = Math.random();
  n = Math.round(n * 100); // Produces any no b/w 0 to 100
  return n;
}

generateRandomNumber();
