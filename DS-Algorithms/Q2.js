/* SOLUTION 1 */
/* function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    console.log(false);
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }
  //   console.table(freqCounter1);
  //   console.table(freqCounter1);

  for (let char in freqCounter1) {
    if (!(char in freqCounter2)) {
      console.log(false);
      return false;
    }
    if (freqCounter1[char] !== freqCounter2[char]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
} */

/* SOLUTION 2 */
function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    console.log(false);
    return false;
  }
  let freqCounter = {};

  for (let char of str1) {
    // if letter exists, increment, otherwise set to 1
    freqCounter[char] = (freqCounter[char] || 0) + 1;
    // freqCounter[char] ? (freqCounter[char] += 1) : (freqCounter[char] = 1);
  }
  // console.table(freqCounter);

  for (let char of str2) {
    if (!freqCounter[char]) {
      console.log(false);
      return false;
    } else freqCounter[char] -= 1;
  }
  console.log(true);
  return true;
}

validAnagram("cinema", "iceman"); // true
validAnagram("cat", "bat"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("ate", "tea"); // true
