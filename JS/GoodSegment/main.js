function goodSegment(badNumbers, lower, upper) {
  // Write your code here
  const fullArr = [];
  for (let i = lower; i <= upper; i++) {
    fullArr.push(i);
  }

  const sortedBad = badNumbers.sort((a, b) => a - b);

  let seg = [];
  sortedBad.map((e) => {
    const index = fullArr.indexOf(e);
    seg.push(fullArr.slice(0, index));
    fullArr.splice(0, index + 1);
    console.log(seg);
  });
  seg.push(fullArr);

  const len = [];
  seg.forEach((arr) => {
    len.push(arr.length);
  });
  console.log(len);
  const longSegment = Math.max(...len);
  return longSegment;
}

console.log(goodSegment([37, 7, 22, 15, 49, 60], 3, 48));
