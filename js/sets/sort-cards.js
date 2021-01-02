// First, get card list for set from https://pokemontcg.io/cards?setCode=base1&pageSize=1000
// Then convert from JSON here https://json-to-js.com/
// Then copy the array as a variable cards here

const cards = [];

// This code must be after the cards variable
console.log(cards.length);
// To check if I'm slicing correctly
for (let i = 0; i <cards.length; i++ ){
    console.log (parseInt(cards[i].id.slice(6)))
}
var sorted = cards.sort((a, b) => {return parseInt(a.id.slice(6)) - parseInt(b.id.slice(6))});
console.log(sorted)

// Finally, mark all the holo rares