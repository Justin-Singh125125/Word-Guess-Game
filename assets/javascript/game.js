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

    var found = true;
    for (var index = 0; index < game.currentWord.length; index++) {
        //if our current guess is any of the letters 
        if (game.currentGuess.toUpperCase() === game.currentWord[0]) {
            game.dashesArray[0] = game.currentGuess.toUpperCase();
        }
        else if (game.currentGuess === game.currentWord[index]) {
            console.log("check array test");
            console.log('check array: ' + game.currentWord[index]);

            found = true;
            return found;



        }
        else {
            found = false;
        }



    }
    return found;
}



// main function 
var intro = "PRESS ANY KEY TO GET STARTED";
document.getElementById("display-start").innerHTML = intro;


//we want a new word from the beginning
var nextWord = true;
//alloted 20 guessed
game.remainingGuesses = 20;
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
        //if our current guess equals the first element, uppercase it so it fits
        if (game.currentGuess.toUpperCase() === game.currentWord[0]) {
            game.dashesArray[0] = game.currentGuess.toUpperCase();
            game.whenToChange++;
        }
        isFound = checkArray();
        console.log(isFound);

        //if our current guess does not equal any of the index
        if (isFound === false) {
            game.remainingGuesses--;
        }

        //suppost to treat the current set word as an array by accessing its characters
        for (var index = 0; index < game.currentWord.length; index++) {


            if (game.dashesArray[index] === game.currentGuess) {
                console.log('key already hit');
            }
            else {
                //if our current letter guess matches any of the letters inside current word
                if (game.currentGuess === game.currentWord[index]) {
                    game.dashesArray[index] = game.currentGuess;
                    //if the word is already in the dashes array, do not increase when to change
                    if (game.currentGuess === game.currentWord[index])
                        //increment to the length to know when the word is full
                        game.whenToChange++;
                    console.log('when to change: ' + game.whenToChange);
                    console.log('current word length: ' + game.currentWord.length);
                }



            }


        }
        if (game.whenToChange === game.currentWord.length) {



            nextWord = true;



        }


        //these two are outside of the loop because they will not display the full content of dashes array
        resetDashes();
        displayDashesArray();
        displayRemainingGuesses();

        //if one of the letters is not found, do this


    }
















}