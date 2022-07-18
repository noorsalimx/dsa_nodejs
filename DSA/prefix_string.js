//param A : array of strings
//param B : string
//return a array of integers
function solve(A, B) {
  let left = 0, right = A.length - 1, ans = [-1, -1];

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (match(A[mid], B)) {
      ans[0] = mid;
      right = mid - 1;
    } else if (A[mid] > B) {
      right = mid - 1;
    } else if (A[mid] < B) {
      left = mid + 1;
    }
  }

  left = 0; right = A.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (match(A[mid], B)) {
      ans[1] = mid;
      left = mid + 1;
    } else if (A[mid] > B) {
      right = mid - 1;
    } else if (A[mid] < B) {
      left = mid + 1;
    }
  }
  return ans;
}

function match(a, b) {
  if (b.length > a.length) return false;
  let str = a.substring(0, b.length);
  return str === b;
}
