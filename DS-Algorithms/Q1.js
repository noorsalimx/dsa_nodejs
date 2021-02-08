/* Solution 1 */
/* function countChars(str) {
  // make a object to return at end
  let obj = {};
  // loop over string, for each letter
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is a letter/number AND is a key in obj object, add 1 to count
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        // if the char is a letter/number AND is not a key in obj object,add it to the object and set value 1
        obj[char] = 1;
      }
    }
    // if the char is something else (space, period, etc.), do nothing
  }
  console.table(obj);
  return obj;
} */

/* Solution 2 */
/* function countChars(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  console.table(obj);
  return obj;
} */

/* Solution 3 */
function countChars(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  console.table(obj);
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) /* (0-9) */ &&
    !(code > 64 && code < 91) /* (A-Z) */ &&
    !(code > 96 && code < 123) /* (a-z) */
  ) {
    return false;
  }
  return true;
}

countChars("Hi there! I'm 20.");
