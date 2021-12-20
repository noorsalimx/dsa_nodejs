// find how many unique values are in an array
let numbers = [];
for (let i = 0; i <= 1000000; i++) {
  numbers.push(parseInt(Math.random() * 10));
}


function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // console.log(i, j);
  }
  // console.log(arr);
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]));
// console.log(countUniqueValues([]));

console.time('for');
console.log(countUniqueValues(numbers));
console.timeEnd('for');

console.time('filter');
console.log(numbers.filter((value, index, array) => array.indexOf(value) === index));
console.timeEnd('filter');

console.time('set');
console.log([...new Set(numbers)]);
console.timeEnd('set');
