// Prints first n terms of Recaman sequence
function recaman(n) {
  // Create an array to store terms
  let arr = new Array(n);

  // First term of the sequence is always 0
  arr[0] = 0;
  console.log(arr[0] + ' ,');

  // Fill remaining terms using recursive formula.
  for (let i = 1; i < n; i++) {
    let curr = arr[i - 1] - i;
    for (let j = 0; j < i; j++) {
      // If arr[i-1] - i is negative or already exists.
      if (arr[j] == curr || curr < 0) {
        curr = arr[i - 1] + i;
        break;
      }
    }
    arr[i] = curr;
    console.log(arr[i] + ', ');
  }
}

// Prints first n terms of Recaman sequence
function recaman_1(n) {
  if (n <= 0) return;

  // Print first term and store it in a hash
  //   console.log(0 + ', ');
  let s = new Set();
  s.add(0);

  // Print remaining terms using recursive formula.
  let prev = 0;
  for (let i = 1; i < n; i++) {
    let curr = prev - i;

    // If arr[i-1] - i is negative or already exists.
    if (curr < 0 || s.has(curr)) curr = prev + i;
    s.add(curr);
    // console.log(curr + ', ');
    prev = curr;
  }
  console.log(s);
}

recaman(5);

recaman_1(2);
