function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function omitBadWords(text) {
  let wordArray = text.split(" ");
  const badWords = ["zoinks", "muppeteers", "biffaroni", "loopdaloop"];
  badWords.forEach(function(element){
    wordArray = wordArray.filter(word => word.toLowerCase() !== element.toLowerCase());
  });
  return wordArray;
}
