function pythagoreanTriplet() {
  //  Find a, b, c
  /* const n = 12;
  for (var a = 1; a < n - 1; a++) {
    for (var b = a; b < n; b++) {
      c = Math.sqrt(a * a + b * b);
      if (c % 1 === 0) {
        console.log(a, b, c);
        return a * b * c;
      }
    }
  } */

  //  Find product of a * b * c where a + b + c = 1000.
  const sum = 1000;

  for (let a = 1; a <= sum / 3; a++) {
    for (let b = a + 1; b <= sum / 2; b++) {
      let c = sum - a - b;
      if (a * a + b * b == c * c) {
        console.log(a, b, c);
        return a * b * c;
      }
    }
  }
}

console.log(pythagoreanTriplet()); //  31875000
pythagoreanTriplet();
