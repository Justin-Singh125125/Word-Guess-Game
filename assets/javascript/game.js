//Images are from Disney 
//soundtracks are from various sources
console.log("HEY! NO CHEATING!");
//game object
var game = {
    //an array full of the words to guess
    guessTheWords: ['Aladdin', 'Dumbo', 'Bambi', 'Cinderella', 'Pocahontas', 'Hercules', 'Mulan', 'Tarzan', 'Pinocchio', 'Moana', 'Brave', 'Tangled'],
    //an empty array where we will push the words already guessed
    //modify those dashes to be removed with each letter
    //everytime a new word is selected, fill this array up with dashes
    //use splice function to remove items
    lettersGuessed: [],
    dashesArray: [],
    //holds the song links
    winningSongs: [],
    winningImages: [],
    //holds the total amount of guesses the user has, 
    remainingGuesses: 0,
    numOfLosses: 0,
    whenToChange: 0,
    //holds wins
    wins: 0,
    // holds number of guesses
    numberOfGuesses: 0,
    currentGuess: '',
    //random number
    randomNumber: 0,
    //current word
    currentWord: '',
    //background music for the game
};
function setCurrentWord() {
    game.randomNumber = Math.floor(Math.random() * game.guessTheWords.length);
    game.currentWord = game.guessTheWords[game.randomNumber];
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
function showImage() {
    document.getElementById("img").style.visibility = 'visible';
}
function hideImage() {
    document.getElementById("img").style.visibility = 'hidden';

}
function selectSong() {
    song.src = game.winningSongs[game.randomNumber];

}
function playSong() {
    song.play();
}
function pauseSong() {
    song.pause();
}
//harcode winnning images
function fillWinningImages() {
    game.winningImages[0] = "./assets/images/aladdin.jpg";
    game.winningImages[1] = "./assets/images/Dumbo.jpg";
    game.winningImages[2] = "./assets/images/Bambi.png";
    game.winningImages[3] = "./assets/images/Cinderella.jpg";
    game.winningImages[4] = "./assets/images/Pochahontas.jpg";
    game.winningImages[5] = "./assets/images/Hercules.jpg";
    game.winningImages[6] = "./assets/images/Mulan.png";
    game.winningImages[7] = "./assets/images/Tarzan.png";
    game.winningImages[8] = "./assets/images/Pinocchio.png";
    game.winningImages[9] = "./assets/images/Moana.png";
    game.winningImages[10] = "./assets/images/Brave.jpg";
    game.winningImages[11] = "./assets/images/Tangled.jpg";
}
//hardcode links to songs
function fillSongs() {
    game.winningSongs[0] = "./assets/sounds/aladdin.mp3";
    game.winningSongs[1] = "./assets/sounds/Dumbo.m4a";
    game.winningSongs[2] = "./assets/sounds/Bambi.mp3";
    game.winningSongs[3] = "./assets/sounds/Cinderella.mp3";
    game.winningSongs[4] = "./assets/sounds/Pocahontas.mp3";
    game.winningSongs[5] = "./assets/sounds/Hercules.mp3";
    game.winningSongs[6] = "./assets/sounds/Mulan.mp3";
    game.winningSongs[7] = "./assets/sounds/Tarzan.mp3";
    game.winningSongs[8] = "./assets/sounds/Pinocchio.mp3";
    game.winningSongs[9] = "./assets/sounds/Moana.mp3";
    game.winningSongs[10] = "./assets/sounds/Brave.mp3";
    game.winningSongs[11] = "./assets/sounds/Tangled.mp3";
}
//selects a random image
function selectImage() {
    var picLink = document.getElementById("img");
    picLink.src = game.winningImages[game.randomNumber];
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
var song = document.getElementById("audio");
var songSource;
//loads the songs into the arrays
fillWinningImages();
fillSongs();
//everytime a key is pressed, do this
document.onkeydown = function (e) {
    //key that we guess gets stored here
    game.currentGuess = e.key;
    //if we want a new word do this
    if (nextWord) {
        pauseSong();
        //makes images hidden
        hideImage();
        //resets an text in the dashes array area
        resetDashes();
        //sets current word
        setCurrentWord();
        selectSong();
        selectImage();
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
            }

        }
        //suppost to treat the current set word as an array by accessing its characters
        for (var index = 0; index < game.currentWord.length; index++) {
            //if the elements in the dashes array are the same as our current guess, do this
            if (game.dashesArray[index] != game.currentGuess) {
                //if our current letter guess matches any of the letters inside current word
                if (game.currentGuess === game.currentWord[index]) {
                    game.dashesArray[index] = game.currentGuess;
                    //if the word is already in the dashes array, do not increase when to change
                    if (game.currentGuess === game.currentWord[index]) {  //increment to the length to know when the word is full
                        game.whenToChange++;
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
            //selects songs
            selectImage();
            showImage();
            playSong();
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

















