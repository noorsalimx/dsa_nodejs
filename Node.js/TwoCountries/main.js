function factorial(n) {
  //return n ? n * factorial(n - 1) : 1;
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

/**
 * Get sum of factorial of digits of a number
 * Accepts string of a number
 * @param {*} numStr
 */

function sumOfFact(numStr) {
  let sum = 0;
  for (let i in numStr) {
    if (Number(numStr[i]) === 0) {
      sum = sum + 1;
    } else {
      sum = sum + factorial(Number(numStr[i]));
    }
  }
  return sum;
}

function maxStrength(n) {
  // Write your code here
  let ids = [n];
  //do {
  let numStr = n.toString();
  if (numStr.length > 1) {
    let sum = sumOfFact(numStr);
    ids.push(sum);
  } else {
    ids.push(factorial(Number(n)));
  }
  let max = Math.max(...ids);
  let lastElement = sumOfFact(`${ids[ids.length - 1]}`);
  console.log(lastElement);
  //} while (max);
  return ids;
}
console.log(maxStrength(5));
