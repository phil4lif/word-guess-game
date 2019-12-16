// Declare wins, losses, remaining guesses and guessed so far and blank space variables and arrays
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var guessedSoFar = [""];
var blankSpaces = [""];


//Makes an array for the random word that the computer will choose
var randomWord = ["Dale", "Andy", "Laura", "Audrey", "Ben", "Harry", "Pete", "Donna", "Leland", "James", "Bobby", "Mike", "Bob"];

//Computer chooses from the randomword array
var word = randomWord[Math.floor(Math.random() * randomWord.length)];
console.log(word);


