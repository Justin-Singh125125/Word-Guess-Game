var game = {
    //holds wins
    wins: 0,
    // holds number of guesses
    numberOfGuesses: 0,
    //an array full of the words to guess
    guessTheWords: ['test', 'ing'],
    //holds the total amount of guesses the user has, 
    remainingGuesses: 20,

    //an empty array where we will push the words already guessed
    lettersGuessed: [],

    //functions that access these variables
    //we cant use void for functions that do not return anything because java thinks its not a function
    decreaseRemainingGuesses: function () {
        //subtracts 1 from the remaining number of guesses
        game.remainingGuesses--;
    },

    getRemainingGuesses: function () {
        return game.remainingGuesses;
    },

    increaseWins: function () {
        wins++;
    },

    getNumOfWins: function () {
        return game.wins;

    },
    increaseNumOfGuesses: function () {
        game.numberOfGuesses++;
    },
    getNumOfGuesses: function () {
        return game.numberOfGuesses;
    },
}



game.lettersGuessed.push(game.guessTheWords[0]);
console.log(game.lettersGuessed[0]);







