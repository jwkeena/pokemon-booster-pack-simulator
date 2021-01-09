// Card selection logic
function chooseSet() {
    currentSet = document.getElementsByClassName("select-set")[0].value;
    openPack(currentSet);
}

String.prototype.decapitalize = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

function sortSet(setName) {
    const set = sets[setName];
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
    return setName;
}

function openPack(setName) {
    const set = sets[setName];
    if (set.cardsAreSorted === false) {
        return openPack(sortSet(setName))
    }
    const holoPulled = calculateOdds(set.chanceOfHolo);
    const secretRarePulled = calculateOdds(set.chanceOfSecretRare);
    const pack = [];
    const randomPackArtUrls = set.packArt[randomIndex(set.packArt.length)];
    set.cardsToPull.forEach((cardType, index) => pullCard(cardType, pack, set, holoPulled, secretRarePulled, index))
    pulledPacks.push({ set: set, packArtUrls: randomPackArtUrls, cards: [...pack] });
    switch (uiViewType) {
        case "singlePackFlip":
            singlePackFlip(randomPackArtUrls, pack);
            break;
        case "rowView":
            const sortOption = document.querySelector(".select-row-view-sorting").value;
            displayRowView(randomPackArtUrls, pack, sortOption);
            break;
        case "gridView":
            displayGridView(randomPackArtUrls, pack);
            break;
        default:
            console.log("Default view type - this should be impossible");
    }
}

function calculateOdds(odds) {
    const diceRoll = Math.random();
    if (diceRoll <= odds)
        return true;
    // I know the else statement is optional since js coerces undefined to false but this reads better OKAY?!
    else
        return false;
}

function pullCard(cardType, pack, set, holoPulled, secretRarePulled, index) {
    let card = null;
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
        default: // Handles commons, uncommons
            card = set.sortedCards[cardType.decapitalize() + "s"][randomIndex(set.sortedCards[cardType.decapitalize() + "s"].length)]
    }

    // Using recursion again. TODO: refactor to keep a duplicate array of possible choices, popping off chosen ones
    if (isDuplicate(card, pack)) {
        pullCard(cardType, pack, set, holoPulled, secretRarePulled, index);
    }
    else {
        card.pullOrder = index;
        pack.push(card);

    }
    return pack;
}

function randomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function isDuplicate(card, pack) {
    for (let i = 0; i < pack.length; i++) {
        if (pack[i] === card)
            return true;
    }
}
