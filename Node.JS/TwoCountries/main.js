function factorial(n) {
  //return n ? n * factorial(n - 1) : 1;
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

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
  let idArr = [n];
  //do {
  let numStr = n.toString();
  if (numStr.length > 1) {
    let sum = sumOfFact(numStr);
    idArr.push(sum);
  } else {
    idArr.push(factorial(Number(n)));
  }
  let max = Math.max(...idArr);
  let lastElement = sumOfFact(`${idArr[idArr.length - 1]}`);
  console.log(lastElement);
  //} while (max);
  return idArr;
}
console.log(maxStrength(5));
