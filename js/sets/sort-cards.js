console.log(cards.length)
var sorted = cards.sort((a, b) => {return parseInt(a.id.slice(6)) - parseInt(b.id.slice(6))});
console.log(sorted)
// for (let i = 0; i <cards.length; i++ ){
//     console.log (parseInt(cards[i].id.slice(6)))
// }