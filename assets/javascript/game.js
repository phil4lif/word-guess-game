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

for (var i = 0; i < word.length; i++) {
    blankSpaces[i] = "_"
}
console.log(blankSpaces);

// var gameBoard = document.getElementById("gameboard")

document.getElementById("gameboard").innerHTML="" + blankSpaces.join(" ");

//writes the code for the users letter guesses and checks them for a match in the Computers word choice.

document.onkeyup = function(event) {
    var userGuess = event.key;

    if (guessesLeft > 0) {
        if (userGuess === word.)
    }
}
