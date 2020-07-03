// Input : arr = [1, 2, 3, 4, 5, 6, 7, 8];
// Output : arr = [ 2, 1, 4, 3, 6, 5, 8, 7 ];

function swap() {
  console.log("Hello");
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let i = 0;
  while (i < arr.length) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    i += 2;
  }
  console.log(arr);
  return arr;
}

swap();
