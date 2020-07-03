function requestsServed() {
  // Write your code here
  const timestamp = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  let top = [6, 6, 6, 6];
  top = top.sort((a, b) => a - b);
  console.log(top);
  let responded = [];
  top.map((e) => {
    let filtered = timestamp.filter((time) => time <= e);
    filtered = filtered.slice(-5);
    responded.push(...filtered);
    let index = timestamp.indexOf(filtered[0]);
    //console.log(timestamp);
    if (filtered.length >= 5) {
      timestamp.splice(index, 5);
    } else {
      timestamp.splice(index, filtered.length);
    }
  });
  //console.log(responded.length)
  return responded.length;
}
console.log(requestsServed());
