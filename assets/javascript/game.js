var game = {
    //holds wins
    wins: 0,
    // holds number of guesses
    numberOfGuesses: 0,
    //an array full of the words to guess
    guessTheWords: ['Aladdin', 'Dumbo', 'Bambi', 'Cinderella', 'Pocahontas', 'Hercules', 'Mulan', 'Tarzan', 'Pinocchio', 'Moana', 'Brave', 'Tangled', 'Rapunzal'],
    //holds the total amount of guesses the user has, 

    remainingGuesses: 0,

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
    console.log(game.currentWord);
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


// main function 
var intro = "PRESS ANY KEY TO GET STARTED";
document.getElementById("display-start").innerHTML = intro;

nextWord = true;
game.remainingGuesses = 20;

//if a key is pressed
document.onkeydown = function (e) {

    if (nextWord) {
        resetDashes();
        //set current word
        setCurrentWord();
        //fill up the dashes
        fillDashesArray();
        //display the dashes on screen
        displayDashesArray();

        //displays number of wins

        displayWins();
        nextWord = false;
    }
    else {
        //set the loop control variable

        //get first guess

        console.log(game.currentGuess);

        for (index = 0; index < game.currentWord.length; index++) {
            game.currentGuess = e.key;
            //if our current letter guess matches any of the letters inside current word
            if (game.currentGuess === game.currentWord[index]) {
                //modify the dashes array and reput it
                game.dashesArray[index] = game.currentGuess;
                resetDashes();
                displayDashesArray();
                console.log('inside');

            }
            else {
                game.remainingGuesses--;
                console.log('outside');
            }
        }

    }












}