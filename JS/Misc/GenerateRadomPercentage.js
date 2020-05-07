function generateRandomNumber() {
  let n = Math.random();
  n = Math.round(n * 100);
  return n;
}

generateRandomNumber();
