// Global variables
// Card info is isolated in other js files already loaded on index.html
// TODO: move the sets to its own file
const sets = {
    baseSet: {
        cards: baseSetCards,
        cardsAreSorted: false,
        chanceOfHolo: 1 / 3,
        chanceOfSecretRare: 0,
        cardsToPull: ["Energy", "Common", "Energy", "Common", "Common", "Common", "Common", "Rare", "Uncommon", "Uncommon", "Uncommon"],
        code: "base1",
        ptcgoCode: "BS",
        name: "Base",
        series: "Base",
        totalCards: 102,
        releaseDate: "01/09/1999",
        symbolUrl: "https://images.pokemontcg.io/base1/symbol.png",
        logoUrl: "https://images.pokemontcg.io/base1/logo.png",
        updatedAt: "08/14/2020 09:35:00"
    },
    jungle: {
        cards: jungleCards,
        cardsAreSorted: false,
        chanceOfHolo: 1 / 3,
        chanceOfSecretRare: 0,
        cardsToPull: ["Common", "Common", "Common", "Common", "Common", "Common", "Common", "Rare", "Uncommon", "Uncommon", "Uncommon"],
        code: 'base2',
        ptcgoCode: 'JU',
        name: 'Jungle',
        series: 'Base',
        totalCards: 64,
        releaseDate: '06/16/1999',
        symbolUrl: 'https://images.pokemontcg.io/base2/symbol.png',
        logoUrl: 'https://images.pokemontcg.io/base2/logo.png',
        updatedAt: '08/14/2020 09:35:00'
    }
}

// Global functions
String.prototype.decapitalize = function() {
    return this.charAt(0).toLowerCase() + this.slice(1)
}

function sortSet(set) {
    set.sortedCards = {
        secretRares: (set.chanceOfSecretRare === 0 ? [] : set.cards.filter(card => card.rarity === "Secret Rare")),
        holoRares: set.cards.filter(card => card.rarity === "Holo Rare"),
        rares: set.cards.filter(card => card.rarity === "Rare"),
        uncommons: set.cards.filter(card => card.rarity === "Uncommon"),
        commons: set.cards.filter(card => card.supertype !== "Energy" && card.rarity === "Common"),
        energy: set.cards.filter(card => card.supertype === "Energy" && card.rarity === "Common")
    };
    // TODO: refactor perhaps to iterate over all cards just once, instead of using .filter five times?
    // TODO: if I do just one for loop, use a switch statement. Check for energy cards first.
    set.cardsAreSorted = true;
    return set;
}

function openPack(set) {
    if (!set.cardsAreSorted) {
        return openPack(sortSet(set))
    }
    const holoPulled = calculateOdds(set.chanceOfHolo);
    const secretRarePulled = calculateOdds(set.chanceOfSecretRare);
    const pack = [];
    set.cardsToPull.forEach(cardType => pullCard(cardType, pack, set, holoPulled, secretRarePulled))
    displayOpenedPack(pack);
}

function calculateOdds(odds) {
    const diceRoll = Math.random();
    if (diceRoll <= odds)
        return true;
    // I know the else statement is optional since js coerces undefined to false but this reads better OKAY?!
    else 
        return false; 
}

function pullCard(cardType, pack, set, holoPulled, secretRarePulled) {
    let card = null;
    switch (cardType) {
        case "Energy":
            card = set.sortedCards.energy[randomIndex(set.sortedCards.energy.length)]
            break;
        case "Rare":
            if (holoPulled) {
                card = set.sortedCards.holoRares[randomIndex(set.sortedCards.holoRares.length)]
            } else if (secretRarePulled) {
                card = set.sortedCards.secretRares[randomIndex(set.sortedCards.secretRares.length)]
            } else {
                card = set.sortedCards.rares[randomIndex(set.sortedCards.rares.length)]
            }
            break;
        default: // Handles commons, uncommons
            card = set.sortedCards[cardType.decapitalize() + "s"][randomIndex(set.sortedCards[cardType.decapitalize() + "s"].length)]
    }

    // Using recursion again. TODO: refactor to keep a duplicate array of possible choices, popping off chosen ones
    if (isDuplicate(card, pack)) {
        pullCard(cardType, pack, set, holoPulled); 
    }
    else 
        pack.push(card);
    return pack;
}

function randomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);;
}

function isDuplicate(card, pack) {
    for (let i = 0; i < pack.length; i++) {
        if (pack[i] === card)
            return true;
    }
}

// -----------------------
// UI

function displayOpenedPack(pack) {
    console.log(pack);
    const packWrapper = document.createElement("div");
    packWrapper.classList.add("open-pack");
    document.getElementById("opened-packs").prepend(packWrapper);
    // Creates elements like this: <div class="pulled-card" style="background-image: url(https://images.pokemontcg.io/base2/64.png)"></div>
    // For some unfathomable reason I can't create img tags, or the flexbox overflow-y breaks
    for (let i = 0; i < pack.length; i++) {
        const card = document.createElement("div");
        card.classList.add("pulled-card");
        card.style.backgroundImage = "url('" + pack[i].imageUrl + "')";
        packWrapper.appendChild(card);
    }
    // Event delegation for horizontal scrolling
    // https://stackoverflow.com/questions/11700927/horizontal-scrolling-with-mouse-wheel-in-a-div
    packWrapper.addEventListener("wheel", e => {
        const toLeft  = e.deltaY < 0 && packWrapper.scrollLeft > 0
        const toRight = e.deltaY > 0 && packWrapper.scrollLeft < packWrapper.scrollWidth - packWrapper.clientWidth
      
        if (toLeft || toRight) {
          e.preventDefault()
          packWrapper.scrollLeft += e.deltaY
        }
    })
}

// Event listeners
const buttonOpenPack = document.querySelector(".button-open-pack");
buttonOpenPack.addEventListener("click", () => openPack(sets.jungle));