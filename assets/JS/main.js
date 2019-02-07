// start game by pressing a random key 

// An array of words
let pokemon = ["Mew", "Pikachu", "Charizard", "Eevee", "Jigglypuff", "Squirtle", "Gyarados", "Snorlax", "Blastoise", "Vulpix", "Dratini", "Growlithe", "Clefairy", "Bulbasaur", "Vaporeon", "Flareon"]

// Creating a loop of the words - Do I need this?

// for (let i = 0; i < pokemon.length; i++) {
//     console.log(pokemon[i]);
// }

// select a random word from the loop
var randomIndex = Math.floor(Math.random() * pokemon.length); 
console.log(pokemon[randomIndex])


// display underscores that are === to the length of the randomly selected words

// create if else statements to compare the user imput to the randomly selected word & change the display from an underscore to the correct letter

