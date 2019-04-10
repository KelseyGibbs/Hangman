// Creates main variables
var guess;
var letters = [];
var wrong = 9;
var word;
var correctLetters = 0;
var losses = 0;
var wins = 0;

// Word arry
var pokemon = [
    "mew",
    "pikachu",
    "charizard",
    "eevee",
    "jigglypuff",
    "squirtle",
    "gyarados",
    "snorlax",
    "blastoise",
    "vulpix",
    "dratini",
    "growlithe",
    "clefairy",
    "bulbasaur",
    "vaporeon",
    "flareon"
];

// Chooses a random word from the pokemon array 
function randomName() {
    document.getElementById(`wordDisplay`).innerHTML = " ";
    return pokemon[Math.floor(Math.random() * pokemon.length)];
}

// Creating a new function to 
function getStarted() {
    // Creating a variable and assigning it to the return of the function randomName
    word = randomName();
    // Creates Underscores equal to the word
    for (i = 0; i < word.length; i++) {
        letters[i] = "_";
    }
    // Displays Underscores
    document.getElementById("wordDisplay").innerHTML = letters.join(" ");
    console.log(letters)
    console.log(word);
}

// Main game
function main() {
    document.onkeyup = function (event) {




        guess = (String.fromCharCode(event.keyCode)).toLowerCase();

        document.getElementById(`guessed`).append(guess);

        for (i = 0; i < word.length; i++) {

            if (guess === word[i]) {
                correctLetters++;
                console.log(correctLetters)
                letters[i] = guess;
                document.getElementById("wordDisplay")
                    .innerHTML = letters.join(" ");
            }

            if (correctLetters === word.length) {
                console.log("fuck yea")
                correctLetters = 0;
                wins++;

                document.getElementById(`wins`).innerHTML = ("Wins " + wins);

                reset();
                
            }

        }
    };
}

function reset() {
    document.getElementById(`guessed`).innerHTML = " ";
    document.getElementById(`wordDisplay`).innerHTML = " ";
    letters = [];
    // randomName();
    getStarted();
    main();
}
getStarted();

main();
