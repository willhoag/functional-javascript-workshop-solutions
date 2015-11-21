function countWords(inputWords) {
  return inputWords.reduce(function (prev, curr) {
    prev[curr] = ++prev[curr] || 1;
    return prev;
  }, {});
}

module.exports = countWords;
