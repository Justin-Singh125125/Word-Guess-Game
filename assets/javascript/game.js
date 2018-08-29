var game = {
    //holds wins
    wins: 0,
    // holds number of guesses
    numberOfGuesses: 0,
    //an array full of the words to guess
    guessTheWords: ['Aladdin', 'Dumbo', 'Bambi', 'Cinderella', 'Pocahontas', 'Hercules', 'Mulan', 'Tarzan', 'Pinocchio', 'Moana', 'Brave', 'Tangled', 'Rapunzal'],
    //holds the total amount of guesses the user has, 

    remainingGuesses: 0,
    numOfLosses: 0,

    whenToChange: 0,

    //an empty array where we will push the words already guessed
    //modify those dashes to be removed with each letter
    //everytime a new word is selected, fill this array up with dashes
    //use splice function to remove items
    lettersGuessed: [],
    dashesArray: [],

    currentGuess: '',


    //random number
    randomNumber: 0,

    //current word
    currentWord: '',

};

function setCurrentWord() {
    game.currentWord = game.guessTheWords[Math.floor(Math.random() * game.guessTheWords.length)];
}
function fillDashesArray() {
    for (index = 0; index < game.currentWord.length; index++) {
        game.dashesArray.push("-");
    }
}
function fillDashesArrayAfter() {
    for (index = 0; index < game.currentWord.length; index++) {
        game.dashesArray[index] = "-";
    }
}
function displayDashesArray() {
    for (index = 0; index < game.currentWord.length; index++) {
        document.getElementById("current-word").innerHTML += game.dashesArray[index];
    }
}
function resetDashes() {
    document.getElementById("current-word").innerHTML = "";
}
function displayWins() {
    document.getElementById("wins").innerHTML = "Wins: " + game.wins;
}
function displayLosses() {
    document.getElementById("losses").innerHTML = "Losses: " + game.numOfLosses;
}
function displayRemainingGuesses() {
    document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + game.remainingGuesses;
}
//checks an array
function checkArray() {
    //found has a default value of true
    var found = true;

    for (var index = 0; index < game.currentWord.length; index++) {
        //if our current guess is any of the characters in current word 
        if (game.currentGuess.toUpperCase() === game.currentWord[0]) {
            //special case for the first character
            game.dashesArray[0] = game.currentGuess.toUpperCase();
            //if it is found, immediently return that way we know that their is one without any changes from false
            found = true;
            return found;
        }
        else if (game.currentGuess === game.currentWord[index]) {
            console.log("check array test ");
            console.log('check array: ' + game.currentWord[index]);

            found = true;
            return found;



        }
        else {
            //we dont want to return false here, because we need to check every element here
            found = false;
        }



    }
    //if nothing is true, this will return the false value
    return found;
}


function isAlreadyGuessed() {
    //assume the word is not already gussed
    var status = false;
    var tracker = 0;
    for (var i = 0; i < game.lettersGuessed.length; i++) {
        //if the letter we guess is not in the letters array

        if (game.currentGuess === game.lettersGuessed[i]) {
            //we return true that way we can 
            status = true;
            return status;
        }
        else {
            status = false;
        }


    }
    return status;
}

function writeAlreadyGuessed() {
    for (var i = 0; i < game.lettersGuessed.length; i++) {
        document.getElementById("display-guessed").innerHTML += game.lettersGuessed[i] + ', ';
    }



}
function eraseAlreadyGuessed() {
    document.getElementById("display-guessed").innerHTML = "";

}



// main function ******************************************************************************
var intro = "PRESS ANY KEY TO GET STARTED";
document.getElementById("display-start").innerHTML = intro;


// a bool variable to check guessed letters
var alreadyInputed = false;


//we want a new word from the beginning
var nextWord = true;
//alloted 20 guessed
game.remainingGuesses = 10;
var isFound = true;

//if a key is pressed this function will execute
document.onkeydown = function (e) {
    //key that we guess gets stored here
    game.currentGuess = e.key;
    console.log(game.currentGuess);

    //if we want a new word do this
    if (nextWord) {
        //resets an text in the dashes array area
        resetDashes();
        //sets current word
        setCurrentWord();
        //check what word is set
        console.log(game.currentWord);
        //fill up the dashes
        fillDashesArray();
        //display the dashes on screen
        displayDashesArray();

        //displays number of wins

        displayWins();
        displayLosses();
        displayRemainingGuesses();
        nextWord = false;
    }
    else {


        //first thing we check if we already guessed that letter
        //if our current guess equals the first element, uppercase it so it fits
        if (game.currentGuess.toUpperCase() === game.currentWord[0]) {
            //sets the first element of the dashes array to an uppercase version of the guess
            game.dashesArray[0] = game.currentGuess.toUpperCase();
            //increases so program knows when to change the word
            game.whenToChange++;
        }
        //checks the current word and treats it as an array of chars
        isFound = checkArray();
        console.log('isFound: ' + isFound);

        //if the current letter we type in does not exist in current word
        if (isFound === false) {
            //we are then going to check to see if the letter we missed is in the missed array 
            alreadyInputed = isAlreadyGuessed();
            //if the letter is not in there, put it there
            if (!alreadyInputed) {

                //while we put it there, decrease our guess by 1
                game.remainingGuesses--;
                //pushes the letter to the array
                game.lettersGuessed.push(game.currentGuess);
                //write to document
                eraseAlreadyGuessed();
                writeAlreadyGuessed();

                //test
                console.log('remainingGuesses: ' + game.remainingGuesses);
                console.log('lettersArray: ' + game.lettersGuessed);
            }

        }

        //suppost to treat the current set word as an array by accessing its characters
        for (var index = 0; index < game.currentWord.length; index++) {

            //if the elements in the dashes array are the same as our current guess, do this
            if (game.dashesArray[index] === game.currentGuess) {
                //so we already did t
                console.log('key already hit');
            }
            else {
                //if our current letter guess matches any of the letters inside current word
                if (game.currentGuess === game.currentWord[index]) {
                    game.dashesArray[index] = game.currentGuess;
                    //if the word is already in the dashes array, do not increase when to change
                    if (game.currentGuess === game.currentWord[index]) {  //increment to the length to know when the word is full
                        game.whenToChange++;
                        console.log('when to change: ' + game.whenToChange);
                        console.log('current word length: ' + game.currentWord.length);

                    }

                }



            }


        }
        resetDashes();
        fillDashesArray();
        displayDashesArray();
        displayRemainingGuesses();


        if (game.whenToChange >= game.currentWord.length) {
            game.wins++;
            game.whenToChange = 0;
            game.remainingGuesses = 10;
            game.lettersGuessed = [];
            nextWord = true;
            resetDashes();
            eraseAlreadyGuessed();

            displayDashesArray();
            fillDashesArrayAfter();
        }
        if (game.remainingGuesses <= 0) {
            game.numOfLosses++;
            game.whenToChange = 0;
            game.remainingGuesses = 10;
            game.lettersGuessed = [];
            nextWord = true;
            resetDashes();
            eraseAlreadyGuessed();
            displayDashesArray();
            fillDashesArrayAfter();
        }



        //these two are outside of the loop because they will not display the full content of dashes array

        //if one of the letters is not found, do this

    }
}

















