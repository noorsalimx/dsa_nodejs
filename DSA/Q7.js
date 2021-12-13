function factorial(n) {
  // if number is 0
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
