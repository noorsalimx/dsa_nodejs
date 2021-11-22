function getValidWords(string, dictionary) {
  for (let i = 0; i < string.length; i++) {
    console.log(string, 'can be split into', string.slice(0, i), 'and', string.slice(i));
    if (dictionary.has(string.slice(0, i)) && dictionary.has(string.slice(i)))
      return [string.slice(0, i), string.slice(i)];
  }
  return [];
}

function WordSplit(inputArray) {
  let [string, dictionary] = inputArray;
  dictionary = new Set(dictionary.split(','));
  const validWords = getValidWords(string, dictionary);
  if (validWords.length !== 0) return validWords;
  return false;
}

console.log(WordSplit(['hellocat', 'apple,bat,cat,goodbye,hello,yellow,why']));
