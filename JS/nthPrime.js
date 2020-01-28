function nthPrime(n) {
  const primes = [2];

  //Num is the number we want to check
  let num = 3,
    isPrime = true;

  //Looping until primes array is equal to n
  while (primes.length < n) {
    //All the primes numbers of a number is always <= its square root
    let max = Math.ceil(Math.sqrt(num));

    for (let i = 0; primes[i] <= max; i++) {
      if (num % primes[i] == 0) {
        //Looping till we find the prime
        isPrime = false;
        break;
      }
    }

    //if Prime found, push it to the array
    if (isPrime) primes.push(num);
    isPrime = true;

    num += 2;
  }

  //Returning the last number
  return primes[primes.length - 1];
}

nthPrime(10001);
