// Declare wins, losses, remaining guesses and guessed so far and blank space variables and arrays
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var guessedSoFar = [""];
var blankSpaces = [""];

// Create variables that hold references to the places in the HTML where we want to display things.
var guessedSoFarText = document.getElementById("guessedsofartext");
var winsText = document.getElementById("win-number");
var lossesText = document.getElementById("loss-number");
var guessesLeftText = document.getElementById("guessesleftnumber");

//a new game function to be called after the game is won or lost
var newGame = function(){
    guessedSoFar = [""];
    guessesLeft = 12;
    word();
    soFarText();
    }
//Makes an array for the random word that the computer will choose
var randomWord = ["dale", "andy", "laura", "audrey", "ben", "harry", "pete", "donna", "leland", "james", "bobby", "mike", "bob"];

//Computer chooses from the randomword array
var word = randomWord[Math.floor(Math.random() * randomWord.length)];
console.log(word);

for (var i = 0; i < word.length; i++) {
    blankSpaces[i] = "_"
}
console.log(blankSpaces);

// var gameBoard = document.getElementById("gameboard")

document.getElementById("gameboard").innerHTML="" + blankSpaces.join(" ");




//writes the code for the users letter guess
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

    guessedSoFar.push(userGuess);
//makes  a function to check if the guess is in fact in the string and returns a boolean
function isMatch() {
    var match = word.includes(userGuess);
    console.log(match);
    

if (match === true) {
    document.getElementById("gameboard").innerHTML="" + blankSpaces.join(userGuess);
    guessesLeft--;
}
else {
    guessesLeft--;
}
//updates the displayed values
guessedSoFarText.textContent = guessedSoFar;
guessesLeftText.textContent = guessesLeft;
}

isMatch();
}