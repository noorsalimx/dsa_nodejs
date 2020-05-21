function changeSort(str) {
  let arrStr = str.split(""); // Converts into array
  let asc = [];
  let dsc = [];
  arrStr.filter((item, index) => {
    arrStr.indexOf(item) === index ? asc.push(item) : dsc.push(item);
  }); // Splits into two array by repeation
  let sortedAsc = asc.sort();
  let sortedDsc = dsc.sort().reverse();
  let finalStr = sortedAsc.join("") + sortedDsc.join("");
  console.log(finalStr);
}

changeSort("dsacab");
