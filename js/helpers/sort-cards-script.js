// First, get card list for set from https://pokemontcg.io/cards?setCode=base1&pageSize=1000
// Then convert from JSON here https://www.convertonline.io/convert/json-to-js
// Then copy the array as a variable cards here
const cards =[] 

// This code must be after the cards variable
console.log(cards.length);
// To check if I'm slicing correctly
for (let i = 0; i <cards.length; i++ ){
    console.log (parseInt(cards[i].id.slice(7)))
}
var sorted = cards.sort((a, b) => {return parseInt(a.id.slice(7)) - parseInt(b.id.slice(7))});
console.log(sorted);

// Copy this whole file into the dev tools console
// Mark all the holo rares
// delete unwanted properties with next line
set.forEach(card => {delete card.nationalPokedexNumber; delete card.evolvesFrom; delete card.retreatCost; delete card.convertedRetreatCost; delete card.ability; delete card.attacks; delete card.weaknesses; delete card.hp; delete card.resistances; delete card.text; })
// Add result to cards.js file

// Get the set info from unused-sets.js
// Copy to sets.js, add new properties. 
// Add info for packOrder and probability from https://pokemonboosterpack.com/pages/about.html
