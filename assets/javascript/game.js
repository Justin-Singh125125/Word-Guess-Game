var game = {
    //holds wins
    wins: 0,
    // holds number of guesses
    numberOfGuesses: 0,
    //an array full of the words to guess
    guessTheWords: ['Aladdin', 'Dumbo', 'Bambi', 'Cinderella', 'Pocahontas', 'Hercules', 'Mulan', 'Tarzan', 'Pinocchio', 'Moana', 'Brave', 'Tangled', 'Rapunzal'],
    //holds the total amount of guesses the user has, 
    remainingGuesses: 20,

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
    currentWord: 0,

    //functions that access these variables
    //we cant use void for functions that do not return anything because java thinks its not a function
    decreaseRemainingGuesses: function () {
        //subtracts 1 from the remaining number of guesses
        game.remainingGuesses--;


        //modifying functions
    },
    increaseNumOfGuesses: function () {
        game.numberOfGuesses++;
    },
    increaseWins: function () {
        wins++;
    },

    displayCurrentWordDashes: function () {
        for (index = 0; index < game.currentWord.length; index++) {
            //fill up dashes
            game.dashesArray.push('-');
            document.write(game.dashesArray[index]);
        }
    },

    setCurrentWord: function () {
        //stores random word in current word
        game.currentWord = game.guessTheWords[game.getRandomNumber()];
    },


    //returning functions
    getRemainingGuesses: function () {
        return game.remainingGuesses;
    },
    getNumOfWins: function () {
        return game.wins;

    },

    getNumOfGuesses: function () {
        return game.numberOfGuesses;
    },

    //returns a random number from the size of the wrods array
    getRandomNumber: function () {
        return Math.floor(Math.random() * game.guessTheWords.length);
    },

    //get a word from the array

    getCurrentWord: function () {
        return game.currentWord;
    },


}



console.log("PRESS ANY KEY TO GET STARTED!");

//if a key is pressed
document.onkeydown = function (e) {


    //display current word

    console.log('CURRENT WORD');


    //first things first, set the current word
    game.setCurrentWord();
    //now we display the current words dashes
    game.displayCurrentWordDashes();

    console.log('NUMBER OF GUESSES REMAINING');
    console.log(game.getRemainingGuesses());

    console.log("LETTERS ALREADY GUESSED");

    game.




}