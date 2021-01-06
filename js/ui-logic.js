// Global variables. Card and set info is isolated in other js files already loaded on index.html
let uiViewType = null;
let pulledPacks = [];
let currentSet = null;
// -----------------------
// UI
function setDisplay() {
    type = document.getElementsByClassName("select-display")[0].value;
    if (uiViewType !== type) {
        uiViewType = type;
        if (pulledPacks.length > 0) {
            switch (type) {
                case "singlePackFlip":
                    // Only want to display the most recently opened pack for now. TODO: allow user to toggle through packs opened via carousel
                    singlePackFlip(pulledPacks[pulledPacks.length - 1].packArtUrl, pulledPacks[0].cards);
                    break;
                case "rowView":
                    pulledPacks.forEach(pack => { displayRowView(pack.packArtUrl, pack.cards) })
                    break;
                case "gridView":
                    pulledPacks.forEach(pack => displayGridView(pack.packArtUrl, pack.cards));
            }
        }
    }
}

function buildCardHTML(classesToAdd, imageUrl) {
    const card = document.createElement("div");
    card.classList.add(...classesToAdd);
    card.style.backgroundImage = "url('" + imageUrl + "')";
    return card;
}

function zoomCard(hiResImageUrl) {
    const img = document.getElementById("hi-res-card");
    img.src = hiResImageUrl;
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
    const packArtFront = buildCardHTML(["card", "pack-art-card", "card--current"], packArtUrl);
    target.append(packArtFront);

    for (let i = 0; i < pack.length; i++) {
        const card = buildCardHTML(["card"], pack[i].imageUrl);
        // card.addEventListener("click", e => { zoomCard(pack[i].imageUrlHiRes) });
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
                $current = $(this).next().length === 1 ? $(this).next().addClass('card--current') : $cards.first().addClass('card--current'); // I added a ternary here to apply the "card-current" class to the next item if there is one, or if not, then the first item
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
function displayRowView(packArtUrl, pack) {
    deleteChildrenFrom(["single-pack-flip-area", "grid-view"]);
    const packWrapper = document.createElement("div");
    packWrapper.classList.add("open-pack");
    document.getElementById("row-view").prepend(packWrapper);
    const packArtFront = buildCardHTML(["pack-art", "pulled-card"], packArtUrl);
    packWrapper.appendChild(packArtFront);

    // Creates elements like this: <div class="pulled-card" style="background-image: url(https://images.pokemontcg.io/base2/64.png)"></div>
    // For some unfathomable reason I can't create img tags, or the flexbox overflow-y breaks. Must use div tags
    for (let i = 0; i < pack.length; i++) {
        const card = buildCardHTML(["pulled-card"], pack[i].imageUrl);
        packWrapper.appendChild(card);
        card.addEventListener("click", e => { zoomCard(pack[i].imageUrlHiRes) });
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

// -----------------------
// UI - grid view
function displayGridView(packArt, pack) {
    console.log("running displayGridView");
}

// -----------------------
// UI - Event listeners
// const buttonOpenPack = document.querySelector(".button-open-pack");
// buttonOpenPack.addEventListener("click", () => openPack(sets.fossil));

const modal = document.getElementById("card-zoom");
const closeModalButton = document.getElementsByClassName("close")[0];
closeModalButton.onclick = function () {
    modal.style.display = "none";
}

const openPackButton = document.getElementsByClassName("open-pack-button")[0];
openPackButton.onclick = () => {openPack(currentSet)}

// -----------------------
// Initialization
// TODO: retrieve user's choice from localStorage
setDisplay("singlePackFlip");
chooseSet();