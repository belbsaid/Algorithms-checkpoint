var wordsCounter = 1;
var lettersCounter = 0;
var vowelsCounter = 0;
var userInput = prompt("Enter a sentence that ends with a point.");
var i = 0;
var ch = userInput[i];

while (ch !== ".") {
    lettersCounter++;

    if (ch === " ") {
        wordsCounter++;
    }
    if ("aeiouAEIOU".includes(ch)) {
        vowelsCounter++;
    }

    i++;
    ch = userInput[i]; 
}

lettersCounter++;

console.log("The number of words in this sentence is", wordsCounter);
console.log("The number of vowels in this sentence is", vowelsCounter);
console.log("The number of characters in this sentence is", lettersCounter);