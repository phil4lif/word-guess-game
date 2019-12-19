//declare vars for wins losses letters guessed, computer word choice, guesses remaining, blankspaces and the array that the computer can choose from
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var guessedSoFar = [""];
var blankSpaces = [""];
var randomWord = ["dale", "andy", "laura", "audrey", "ben", "harry", "pete", "donna", "leland", "james", "bobby", "shelly", "mike", "bob"];
var word = "";
var wordLength = word.length;

//creates variables that reference the html to display the text and stats
var guessedSoFarText = document.getElementById("guesssedsofartext");
var winsText = document.getElementById("win-number");
var lossesText = document.getElementById("loss-number");
var guessesLeftText = document.getElementById("guessesleftnumber");

//computer word generator
generateWord = function () {
    word = randomWord[Math.floor(Math.random() * randomWord.length)];
    // return word;
    wordLength = word.length;

    blankSpaces = [""];
    //for loop that calculates how many blank spaces to print to the doc    
    for (var i = 0; i < word.length; i++) {
        blankSpaces[i] = "_"
    }

    document.getElementById("gameboard").innerHTML = "" + blankSpaces.join(" ");
};

// start game function that resets all the displayed text, then runs through the game.
var newGame = function () {
    guessedSoFar = [""];
    guessesLeft = 12;
    document.getElementById("guessedsofartext").innerHTML = " " + guessedSoFar;
    guessesLeftText.textContent = guessesLeft;
}

//clicks the screen to start the game
document.getElementById("start-button").onclick = function () {
    newGame();
    generateWord();

    //userguess function
    document.onkeyup = function (event) {
        if (guessesLeft > 0) {
            var userGuess = event.key;
            guessesLeft--;
            guessedSoFar.push(userGuess);
            document.getElementById("guessedsofartext").innerHTML = " " + guessedSoFar.join(" ");

            // guessedSoFarText.textContent = guessedSoFar;
            guessesLeftText.textContent = guessesLeft;


            //checks if guesses are correct and displays them in the gameboard
            var isGuessWrong = true;

            for (var j = 0; j < word.length; j++) {
                if (userGuess === word[j]) {
                    wordLength--;
                    isGuessWrong = false;
                    blankSpaces[j] = userGuess;
                    document.getElementById("gameboard").innerHTML = " " + blankSpaces.join(" ");
                }
            }
        }

        //ends game in the event of a loss
        if (guessesLeft === 0) {
            losses++;
            lossesText.texContent = losses;
            alert("I'm sorry, the hangman is coming for you! Click Ok to try again");
            newGame();
            generateWord();
        }

        //code here what happens if the user guesses all the letters correctly before guesses left = 0

        if (wordLength === 0) {
            document.getElementById("gameboard").innerHTML = word;
            wins++;
            winsText.textContent = wins;
            alert("Great work, You've solved the puzzle the correct answer is " + word + ". click ok to play again!")
            newGame();
            generateWord();
        }
    }
}





