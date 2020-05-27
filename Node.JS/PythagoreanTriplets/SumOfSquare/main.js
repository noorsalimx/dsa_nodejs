function sqOfSum(n) {
  let sum = 0;
  sum = (n * (n + 1)) / 2; //  Formula of sum of natural numbers
  /* for (let i = 1; i <= n; i++) {
    sum += i;
  } */
  return sum * sum;
}

function sumOfSq(n) {
  let sum = 0;
  sum = (n * (n + 1) * (2 * n + 1)) / 6; //  Formula of sum of squares of natural numbers
  /* for (let i = 1; i <= n; i++) {
    sum += i * i;
  } */
  return sum;
}

console.log(sqOfSum(100) - sumOfSq(100)); //  Difference for first 100 natural numbers
// 25164150
