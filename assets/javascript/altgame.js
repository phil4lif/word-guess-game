//declare vars for wins losses letters guessed, computer word choice, guesses remaining, blankspaces and the array that the computer can choose from
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var guessedSoFar = [""];
var blankSpaces = [""];
var randomWord = ["dale", "andy", "laura", "audrey", "ben", "harry", "pete", "dona", "lelad", "james", "bobby", "shelly", "mike", "bob"];


//creates variables that reference the html to display the text and stats
var guessedSoFarText = document.getElementById("guesssofartext");
var winsText = document.getElementById("win-number");
var lossesText = document.getElementById("loss-number");
var guessLeftText = document.getElementById("guessesleftnumber");

//computer word generator
generateWord = function () {
    var word = randomWord[Math.floor(Math.random() * randomWord.length)];
    console.log(word);
    
    blankSpaces = [""];
//for loop that calculates how many blank spaces to print to the doc    
    for (var i = 0; i < word.length; i++) {
        blankSpaces[i] = "_"
    }
    console.log(blankSpaces);

    document.getElementById("gameboard").innerHTML = "" + blankSpaces.join(" ");
};

// start game function that resets all the displayed text, then runs through the game.
var newGame = function () {
    guessedSoFar = [""];
    guessesLeft = 12;
    
}






//userguess section



//checks if guesses are correct and displays them in the gmeboard



//ends game in the event of a loss



//ends game in the event of a win



//calls the function to start the game again

