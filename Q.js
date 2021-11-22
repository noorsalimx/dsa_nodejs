function sortLetter(usernames) {
  let arr = [];
  for (let username of usernames) {
    let sorted = [...username].sort().join('');
    // console.log(sorted);
    if (sorted === username) arr.push('NO');
    else arr.push('YES');
  }
  console.log(arr);
}

sortLetter(['hydra', 'foo', 'bar', 'baz']);

function nearlySimilarRectangles(sides) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < sides.length; i++) {
    for (let j = i + 1; j < sides.length; j++) {
      if (sides[i][0] * sides[j][1] === sides[i][1] * sides[j][0]) count++;
    }
  }
  console.log(count);
}

nearlySimilarRectangles([
  [4, 8],
  [15, 30],
  [25, 50],
]);
nearlySimilarRectangles([
  [2, 1],
  [10, 7],
  [9, 6],
  [6, 9],
  [7, 3],
]);
