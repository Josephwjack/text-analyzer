// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

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

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
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

function uniqueWords (text) {
  let wordArray = text.split(" ");
  let amountUsed = [];
  let freq = [];
  wordArray.forEach(function(element) {
    if (!amountUsed.includes(element.toLowerCase())) {
      amountUsed.push(element.toLowerCase());
    }
  }); console.log (amountUsed);
  amountUsed.forEach(function(element2, index) {
    freq[index] = [0];
    wordArray.forEach(function(element1)  {
    if (element1.toLowerCase() === element2) 
    { freq[index]++ }
    });
  }); console.log (freq);
}
// uniqueWords("Hi there hey yo hi hi yay yo whoa there whoa yay");
// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});
