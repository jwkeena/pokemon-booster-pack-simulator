// Card selection logic
function chooseSet() {
    gtag("event", "new_pack_opened", {
        "event_category": "engagement",
        "event_label": "New set dropdown"
    });
    currentSet = document.getElementsByClassName("select-set")[0].value;
    openPack(currentSet);
};

String.prototype.decapitalize = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
};

function sortSet(setName) {
    const set = sets[setName];
    set.sortedCards = {
        secretRares: (set.chanceOfSecretRare === 0 ? [] : set.cards.filter(card => card.rarity === "Secret Rare")),
        holoRares: set.cards.filter(card => card.rarity === "Holo Rare"),
        rares: set.cards.filter(card => card.rarity === "Rare"),
        uncommons: set.cards.filter(card => card.rarity === "Uncommon"),
        commons: (set.cardsToPull.includes("Energy") ? set.cards.filter(card => card.supertype !== "Energy" && card.rarity === "Common") : set.cards.filter(card => card.rarity === "Common")),  // Need ternary because some sets guarantee energy cards, some don't; so sometimes we need a list of commons that includes the common energies, sometimes we don't
        energy: set.cards.filter(card => card.supertype === "Energy" && card.rarity === "Common")
    };
    // TODO: refactor perhaps to iterate over all cards just once, instead of using .filter five times? The other advantage would be that I wouldn't miss any cards. Using a default in a switch statement, I'd catch all the cards. Currently I should be checking that the total number of cards in the set equals the total of all the sorted arrays built here.
    set.cardsAreSorted = true;
    return setName;
};

function noRepeatPackArtFrom(set) {
    let packArt = set.packArt[randomIndex(set.packArt.length)];
    // If there's no packs, whatever we pick is good
    if (pulledPacks.length === 0) return packArt;
    // If what we picked matches the least recent pack (which is displayed first), pick another
    if (packArt === pulledPacks[pulledPacks.length-1].packArtUrls) return noRepeatPackArtFrom(set);
    // Whatever we found must be good
    return packArt;
}

function openPack(setName) {
    if (setName === "random") return chooseRandomSet();
    
    // Guard check 2 (since I'm using recursion)
    // Sort cards into rarity tiers the first time the set is picked
    let set = sets[setName];
    if (set.cardsAreSorted === false) return openPack(sortSet(setName))

    const holoPulled = calculateOdds(set.chanceOfHolo);
    const secretRarePulled = calculateOdds(set.chanceOfSecretRare);
    const cardsInPack = [];
    const newPackArtUrls = noRepeatPackArtFrom(set)
    set.cardsToPull.forEach((cardType, index) => pullCard(cardType, cardsInPack, set, holoPulled, secretRarePulled, index));
    const newId = Symbol();
    pulledPacks.push({ id: newId, set: set, packArtUrls: newPackArtUrls, cards: [...cardsInPack]});
    const sortOption = document.querySelector(".select-row-view-sorting").value;
    switch (uiViewType) {
        case "singlePackFlip":
            setDisplay("singlePackFlip");
            break;
        case "rowView":
            setDisplay("rowView")
            break;
        case "gridView":
            setDisplay("gridView")
            break;
        default:
            console.log("Default view type - this should be impossible");
    };
};

function deletePack(packId) {
    for (let i = 0; i < pulledPacks.length; i++){
        if (pulledPacks[i].id === packId) 
            pulledPacks.splice(i, 1);
    };
    setDisplay("rowView"); 
};

function chooseRandomSet() {
    const allSets = Object.keys(sets);
    const randomSet = allSets[randomIndex(allSets.length)];
    openPack(randomSet);
};

function calculateOdds(odds) {
    const diceRoll = Math.random();
    if (diceRoll <= odds) return true;
    else return false;
    // I know the else statement is optional since js coerces undefined to false but this reads better OKAY?!
};

function pullCard(cardType, pack, set, holoPulled, secretRarePulled, index) {
    let card = null;
    // Special rule for e-series cards to replace the holo with the fifth common. This is kind of ugly, though. TODO: integrate with switch statement, take out if/else statement?
    if (set.holoReplaces5thCommon && holoPulled && index === 4) 
        card = set.sortedCards.holoRares[randomIndex(set.sortedCards.holoRares.length)];
    else 
        switch (cardType) {
            case "Energy":
                card = set.sortedCards.energy[randomIndex(set.sortedCards.energy.length)];
                break;
            case "Rare":
                if (secretRarePulled) {
                    card = set.sortedCards.secretRares[randomIndex(set.sortedCards.secretRares.length)];
                } else if (holoPulled) {
                    card = set.sortedCards.holoRares[randomIndex(set.sortedCards.holoRares.length)];
                } else {
                    card = set.sortedCards.rares[randomIndex(set.sortedCards.rares.length)];
                }
                break;
            case "Regular Rare":
                card = set.sortedCards.rares[randomIndex(set.sortedCards.rares.length)];
                break;
            case "Reverse Holo": 
                const rarityTypes = ["Rare", "Uncommon", "Common"];
                const randomRarity = rarityTypes[randomIndex(rarityTypes.length)];
                // Remember js objects are passed by reference, not value. So when I assign card to a random card object, any change I make will change the card in the set.
                // So I have to create a (shallow) clone of the card object so that it doesn't mutate the card in the set
                // If I didn't, whenever this card is pulled again it will appear to be a reverse holo even when it's supposed to be a normal card
                // See https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript for more options
                card = Object.assign({}, set.sortedCards[randomRarity.decapitalize() + "s"][randomIndex(set.sortedCards[randomRarity.decapitalize() + "s"].length)]);
                card.isReverseHolo = true;
                break;
            default: // Handles commons, uncommons
                card = set.sortedCards[cardType.decapitalize() + "s"][randomIndex(set.sortedCards[cardType.decapitalize() + "s"].length)]
        };

    // Using recursion again. TODO: refactor to keep a duplicate array of possible choices, popping off chosen ones
    // Only run duplicate check if it's not a reverse holo. Reverse holos CAN be duplicates
    if (isDuplicate(card, pack) && cardType !== "Reverse Holo") {
            pullCard(cardType, pack, set, holoPulled, secretRarePulled, index);
    }
    else {
        card.pullOrder = index;
        card.setSymbolUrl = set.symbolUrl;
        pack.push(card);
    };
    return pack;
};

function randomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
};

function isDuplicate(item, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return true;
    };
};
