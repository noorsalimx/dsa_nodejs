function pythagoreanTriplet(n) {
  for (var a = 1; a < n - 1; a++) {
    for (var b = a; b < n; b++) {
      c = Math.sqrt(a * a + b * b);
      if (c % 1 === 0) {
        console.log(a, b, c);
      }
    }
  }
}
pythagoreanTriplet(12);
