// Global variables. Card and set info is isolated in other js files already loaded on index.html
let uiViewType = "singlePackFlip"; // This must remain global so that the card-logic.js file can access it easily (tho' I could use a closure instead)
let pulledPacks = [];
let currentSet = null;
// -----------------------
// UI
function setDisplay(sortOption) {
    displayOption = document.querySelector(".select-display").value;
    uiViewType = displayOption;
    switch (displayOption) {
        case "singlePackFlip":
            showSortButtonForRowView(false);
            // Only want to display the most recently opened pack for now. TODO: allow user to toggle through packs opened via carousel
            singlePackFlip(pulledPacks[pulledPacks.length - 1].packArtUrl, pulledPacks[0].cards);
            break;
        case "rowView":
            showSortButtonForRowView(true);
            if (sortOption !== null)
                deleteChildrenFrom(["single-pack-flip-area", "row-view", "grid-view"]);
            else
                deleteChildrenFrom(["single-pack-flip-area", "grid-view"]);
            pulledPacks.forEach(pack => { displayRowView(pack.packArtUrl, pack.cards, sortOption) })
            break;
        case "gridView":
            pulledPacks.forEach(pack => displayGridView(pack.packArtUrl, pack.cards, sortOption));
        default:
            console.log("Somehow we've passed a nonexistent view type. This should be impossible.")
    }
}

function buildCardHTML(classesToAdd, imageUrl, cardType) {
    const card = document.createElement("div");
    card.classList.add(...classesToAdd);
    if (cardType === "packArt")
        card.style.backgroundImage = "url('" + imageUrl + "')";
    else
        card.style.backgroundImage = "url('../images/site/pokeball-loading.gif')";
    preloadImage(card, imageUrl);
    card.setAttribute("data-card-image", imageUrl);
    return card;
}

// https://www.sitepoint.com/community/t/onload-for-background-image/6462
function preloadImage(card, imageUrl) {
    const img = new Image();
    img.onload = () => onImageLoaded(card);
    img.src = imageUrl;
}

function onImageLoaded(card) {
    const loadedImageUrl = card.getAttribute("data-card-image");
    card.style.backgroundImage = "url('" + loadedImageUrl + "')";
    card.classList.remove("loading");
}

function zoomCard(hiResImageUrl) {
    const div = document.getElementById("hi-res-card");
    div.setAttribute("data-card-image", hiResImageUrl);
    preloadImage(div, hiResImageUrl);
    // div.style.backgroundImage = "url('" + hiResImageUrl + "')";
    const modal = document.getElementById("card-zoom");
    modal.style.display = "block";
}

function deleteChildrenFrom(parentNodes) {
    parentNodes.forEach(node => { document.getElementById(node).innerHTML = "" });
}

// UI - single pack flip
function singlePackFlip(packArtUrl, pack) {
    deleteChildrenFrom(["single-pack-flip-area", "row-view", "grid-view"]);
    const target = document.getElementById("single-pack-flip-area");
    const packArtFront = buildCardHTML(["card", "pack-art-card", "card--current"], packArtUrl, "packArt");
    target.append(packArtFront);
    for (let i = 0; i < pack.length; i++) {
        const card = buildCardHTML(["card", "loading"], pack[i].imageUrl);
        target.appendChild(card);
    }
    $('.cards').commentCards();
}

// Flip through stack of cards modified from https://codepen.io/shshaw/pen/KzYXvP
$.fn.commentCards = function () {
    // Closure...but why?
    return this.each(function () {
        var $this = $(this),
            $cards = $this.find('.card'),
            $current = $cards.filter('.card--current'),
            $next;

        // The crucial changes here was in three parts
        $cards.on('click', function () {
            if ($current.is(this)) { // First, I wanted the condition to only apply to the current card, NOT everything else (so I took the bang out)
                $cards.removeClass('card--current card--out card--next');
                $current.addClass('card--out');
                $current = $(this).next().length === 1 ? $(this).next().addClass('card--current') : $cards.first().addClass('card--current'); // Second, I added a ternary here to apply the "card-current" class to the next item if there is one, or if not, then the first item
                $next = $current.next().length === 1 ? $current.next() : $cards.first(); // Likewise, and finally, I wanted to apply "card--next" class to the item after the current item if there is one, and if not, then the first card
                $next.addClass('card--next');
            }
        });

        if (!$current.length) {
            $current = $cards.first();
            $cards.first().trigger('click');
        }

    })
};

// -----------------------
// UI - row view
function displayRowView(packArtUrl, pack, sortOption = null) {
    const packWrapper = document.createElement("div");
    packWrapper.classList.add("open-pack");
    document.getElementById("row-view").prepend(packWrapper);
    const packArtFront = buildCardHTML(["pack-art", "pulled-card"], packArtUrl, "packArt");
    packWrapper.appendChild(packArtFront);

    // Sort cards in pack before rendering
    if (sortOption !== null)
        pack = sortThis(pack, sortOption);

    // For some unfathomable reason I can't create img tags, or the flexbox overflow-y breaks. Must use div tags
    for (let i = 0; i < pack.length; i++) {
        const card = buildCardHTML(["pulled-card", "loading"], pack[i].imageUrl);
        packWrapper.appendChild(card);
        card.addEventListener("click", () => zoomCard(pack[i].imageUrlHiRes));

        // But I can use img tags for the rarity markers
        const raritySymbol = document.createElement("img");
        raritySymbol.classList.add("rarity");
        if (pack[i].rarity === "Common")
            raritySymbol.src = "../images/site/rarity_common.png";
        if (pack[i].rarity === "Uncommon")
            raritySymbol.src = "../images/site/rarity_uncommon.png";
        if (pack[i].rarity === "Holo Rare" || pack[i].rarity === "Rare" || pack[i].rarity === "Secret Rare")
            raritySymbol.src = "../images/site/rarity_rare.png";
        card.appendChild(raritySymbol)
    };

    // Event delegation for horizontal scrolling from https://stackoverflow.com/questions/11700927/horizontal-scrolling-with-mouse-wheel-in-a-div
    packWrapper.addEventListener("wheel", e => {
        const toLeft = e.deltaY < 0 && packWrapper.scrollLeft > 0;
        const toRight = e.deltaY > 0 && packWrapper.scrollLeft < packWrapper.scrollWidth - packWrapper.clientWidth;

        if (toLeft || toRight) {
            e.preventDefault();
            packWrapper.scrollLeft += e.deltaY;
        }
    });
}

function setRowViewSort() {
    const sortOption = document.querySelector(".select-row-view-sorting").value;
    setDisplay(sortOption);
}

function sortThis(pack, sortOption) {
    // Magic from https://afewminutesofcode.com/how-to-create-a-custom-sort-order-in-javascript
    let sortedPack, sortBy;
    const customSort = ({ data, sortBy, sortField }) => {
        const sortByObject = sortBy.reduce((obj, item, index) => {
            return {
                ...obj,
                [item]: index
            }
        }, {})
        return data.sort((a, b) => sortByObject[a[sortField]] - sortByObject[b[sortField]])
    }

    switch (sortOption) {
        case "rarityDescending":
            sortBy = ["Common", "Uncommon", "Rare", "Holo Rare", "Secret Rare"];
            sortedPack = customSort({ data: pack, sortBy, sortField: 'rarity' });
            break;
        case "rarityAscending":
            sortBy = ["Secret Rare", "Holo Rare", "Rare", "Uncommon", "Common"];
            sortedPack = customSort({ data: pack, sortBy, sortField: 'rarity' });
            break;
        case "packOrder":
            sortedPack = pack.sort((a, b) => { return parseInt(a.pullOrder) - parseInt(b.pullOrder)})
            break;
        case "setNumberAscending":
            sortedPack = pack.sort((a, b) => { return parseInt(a.number) - parseInt(b.number)})
            break;
        case "setNumberDescending":
            sortedPack = pack.sort((a, b) => { return parseInt(b.number) - parseInt(a.number)})
            break;
    }
    return sortedPack;
}

// TODO: Abstract this into a showElement function that takes in an array and spreads it
function showSortButtonForRowView(bool) {
    button = document.querySelector(".button.select-row-view-sorting");
    if (bool)
        button.style = "display: inline-block;";
    else
        button.style = "display: none;";
}

// -----------------------
// UI - grid view
function displayGridView(packArt, pack, sortOption) {
    console.log("running displayGridView");
}

// -----------------------
// UI - Event listeners
// When the user clicks anywhere outside of the modal, close it
const modal = document.getElementById("card-zoom");
modal.onclick = function (e) {
    if (e.target !== document.getElementById("hi-res-card")) {
        modal.style.display = "none";
        document.getElementById("hi-res-card").style.backgroundImage = "url('../images/site/pokeball-loading.gif')";
    }
}

const openPackButton = document.querySelector(".open-pack-button");
openPackButton.onclick = () => { openPack(currentSet) }

// -----------------------
// Initialization
// TODO: retrieve user's choice from localStorage
chooseSet();