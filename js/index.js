// Global variables
// Card info is isolated in other js files already loaded on the main page
const sets = {
    baseSet: {
        cards: baseSetCards,
        chanceOfHolo: 1/3,
        pullOrder: ["Energy", "Common", "Energy", "Common", "Common", "Common", "Common", "Rare", "Uncommon", "Uncommon", "Uncommon"],
        code: "base1",
        ptcgoCode: "BS",
        name: "Base",
        series: "Base",
        totalCards: 102,
        releaseDate: "01/09/1999",
        symbolUrl: "https://images.pokemontcg.io/base1/symbol.png",
        logoUrl: "https://images.pokemontcg.io/base1/logo.png",
        updatedAt: "08/14/2020 09:35:00"
      }
}

// Global functions
function openPack(set) {
    const holoPulled = calculateOdds(set.chanceOfHolo);
    console.log(holoPulled);
    // Determine if rare will be holo
    // If true, pick holo; if false, pick regular rare
    // Take in pullOrder array, get one card for each of those (preventing duplicates)
    // Pick # of uncommons, non-duplicate
    // Pick # of commons, non-duplicate
    // Pick # of energy, if any, non-duplicate
    // Return object of pack opened, with properties set and cards, each card being an object
}

function calculateOdds(odds) {
    const diceRoll = Math.random();
    if (diceRoll <= odds) 
        return true;
    else
        return false;
}

function pullCards(rarity, amount) {

}


function pullCommons(numOfCommons) {

}

function preventDuplicate() {

}

console.log(baseSetCards)

// Event listeners
const buttonOpenPack = document.querySelector(".button-open-pack");

buttonOpenPack.addEventListener("click", () => openPack(sets.baseSet));

