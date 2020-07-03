/**
 * This function generates a specific length of random string,
 * combination of [A-Za-z0-9_]
 */
function generateRandomString(strlen) {
  const chars = [...new Array(26).keys()].map((n) => String.fromCharCode(65 + n)).join("");
  // [...Array(26)].map((_, n) => String.fromCharCode(65 + n)).join('');
  const baseString = chars + chars.toLowerCase() + "_0123456789";

  let str = "";
  for (let i = 0; i < strlen; i++) {
    str += baseString.charAt(Math.floor(Math.random() * baseString.length));
  }
  console.log(str);
  return str;
}

generateRandomString(64); //  Generates random string of length 64
