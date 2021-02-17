/* SOLUTION 1 */
// Complexity O(n^2)

/* function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        console.log(arr[i], arr[j]);
        return arr[i], arr[j];
      }
    }
  }
  console.log("Undefined");
  return "Undefined";
} */

/* Solution 2 */
// Complexity O(n)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      console.log([arr[left], arr[right]]);
      return;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  console.log("Undefined");
  return;
}

sumZero([-7, -4, -3, -2, 0, 1, 4, 10]);
