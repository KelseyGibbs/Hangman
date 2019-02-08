// start game by pressing a random key 

// Creates an array of words
let pokemon = ["Mew", "Pikachu", "Charizard", "Eevee", "Jigglypuff", "Squirtle", "Gyarados", "Snorlax", "Blastoise", "Vulpix", "Dratini", "Growlithe", "Clefairy", "Bulbasaur", "Vaporeon", "Flareon"]

// Selects a random word from the array
var randomword = Math.floor(Math.random() * pokemon.length); 

// Console logs that word, because YAY 
console.log(pokemon[randomword])

// display underscores that are === to the length of the randomly selected words

var userImput = [];
for (var i = 0; i < randomword.length; i++) {
userImput[i] = "_";
}
var unguessed = randomword.length;

console.log(userImput[i])

while (unguessed > 0) {

}

// create if else statements to compare the user imput to the randomly selected word & change the display from an underscore to the correct letter

