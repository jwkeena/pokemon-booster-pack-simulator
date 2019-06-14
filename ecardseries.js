// Feel free to use and repurpose my code, as long as you credit me and/or link to my github page
// Written by justin keena, https://github.com/jwkeena/Pokemon-Booster-Pack-Simulator

function redirect() {
    window.location.href = "mailto:jwkeena@gmail.com";
}

//Sets variables for the flip all button to only affect unflipped cards
let boosterIsFlipped1 = 0;
let boosterIsFlipped2 = 0;
let boosterIsFlipped3 = 0;
let cardIsFlipped1 = 0;
let cardIsFlipped2 = 0;
let cardIsFlipped3 = 0;
let cardIsFlipped4 = 0;
let cardIsFlipped5 = 0;
let cardIsFlipped6 = 0;
let cardIsFlipped7 = 0;
let cardIsFlipped8 = 0;
let cardIsFlipped9 = 0;

//For flipping the booster pack image
function flipBooster1() {
    let element = document.getElementById('booster1');
    if (boosterIsFlipped1 === 0) {
        element.classList.toggle("flipped");
        ++boosterIsFlipped1;
    } else {
        element.classList.toggle("flipped");
        boosterIsFlipped1 = 1;
    }
}

function flipBooster2() {
    let element = document.getElementById('booster2');
    if (boosterIsFlipped2 === 0) {
        element.classList.toggle("flipped");
        ++boosterIsFlipped2;
    } else {
        element.classList.toggle("flipped");
        boosterIsFlipped2 = 1;
    }
}

function flipBooster3() {
    let element = document.getElementById('booster3');
    if (boosterIsFlipped3 === 0) {
        element.classList.toggle("flipped");
        ++boosterIsFlipped3;
    } else {
        element.classList.toggle("flipped");
        boosterIsFlipped3 = 1;
    }
}


let checkFlip = 1;

//When card is clicked, its CSS flipping animation is triggered
//The computer also logs that it has been flipped by changing the corresponding cardIsFlipped variable
//cardIsFlipped 0 = unflipped card; cardIsFlipped 1 = flipped card (waiting for modal zoom), 2 = card being reflipped
//Checks if all cards have been flipped, and then affects the counter and countdown accordingly
function flip1() {
    let element = document.getElementById('myDiv1');
    if (cardIsFlipped1 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped1;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped1 === 1) {
        ++cardIsFlipped1;
        return;
    } 
    if (cardIsFlipped1 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped1 = 0;
        return;
    }
}

function flip2() {
    let element = document.getElementById('myDiv2');
    if (cardIsFlipped2 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped2;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped2 === 1) {
        ++cardIsFlipped2;
        return;
    } 
    if (cardIsFlipped2 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped2 = 0;
        return;
    }
}

function flip3() {
    let element = document.getElementById('myDiv3');
    if (cardIsFlipped3 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped3;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped3 === 1) {
        ++cardIsFlipped3;
        return;
    } 
    if (cardIsFlipped3 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped3 = 0;
        return;
    }
}

function flip4() {
    let element = document.getElementById('myDiv4');
    if (cardIsFlipped4 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped4;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped4 === 1) {
        ++cardIsFlipped4;
        return;
    } 
    if (cardIsFlipped4 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped4 = 0;
        return;
    }
}

function flip5() {
    let element = document.getElementById('myDiv5');
    if (cardIsFlipped5 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped5;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped5 === 1) {
        ++cardIsFlipped5;
        return;
    } 
    if (cardIsFlipped5 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped5 = 0;
        return;
    }
}

function flip6() {
    let element = document.getElementById('myDiv6');
    if (cardIsFlipped6 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped6;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped6 === 1) {
        ++cardIsFlipped6;
        return;
    } 
    if (cardIsFlipped6 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped6 = 0;
        return;
    }
}

function flip7() {
    let element = document.getElementById('myDiv7');
    if (cardIsFlipped7 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped7;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped7 === 1) {
        ++cardIsFlipped7;
        return;
    } 
    if (cardIsFlipped7 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped7 = 0;
        return;
    }
}

function flip8() {
    let element = document.getElementById('myDiv8');
    if (cardIsFlipped8 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped8;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped8 === 1) {
        ++cardIsFlipped8;
        return;
    } 
    if (cardIsFlipped8 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped8 = 0;
        return;
    }
}

function flip9() {
    let element = document.getElementById('myDiv9');
    if (cardIsFlipped9 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped9;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped9 === 1) {
        ++cardIsFlipped9;
        return;
    } 
    if (cardIsFlipped9 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped9 = 0;
        return;
    }   
}

//Only flips cards if they haven't been flipped already
function flipAll() {
    if (cardIsFlipped1 === 0) {
        flip1();
        }
    if (cardIsFlipped2 === 0) {
        flip2();
        }
    if (cardIsFlipped3 === 0) {
        flip3();
        }
    if (cardIsFlipped4 === 0) {
        flip4();
        }
    if (cardIsFlipped5 === 0) {
        flip5();
        }
    if (cardIsFlipped6 === 0) {
        flip6();
        }
    if (cardIsFlipped7 === 0) {
        flip7();
        }
    if (cardIsFlipped8 === 0) {
        flip8();
        }
    if (cardIsFlipped9 === 0) {
        flip9();
        }
}

//Sets up image choices for for modal window
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var img1 = document.getElementById("randomCard1");
var img2 = document.getElementById("randomCard2");
var img3 = document.getElementById("randomCard3");
var img4 = document.getElementById("randomCard4");
var img5 = document.getElementById("randomCard5");
var img6 = document.getElementById("randomCard6");
var img7 = document.getElementById("randomCard7");
var img8 = document.getElementById("randomCard8");
var img9 = document.getElementById("randomCard9");

img1.onclick = function () {
    if (cardIsFlipped1 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img2.onclick = function () {
if (cardIsFlipped2 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img3.onclick = function () {
if (cardIsFlipped3 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img4.onclick = function () {
if (cardIsFlipped4 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img5.onclick = function () {
if (cardIsFlipped5 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img6.onclick = function () {
if (cardIsFlipped6 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img7.onclick = function () {
if (cardIsFlipped7 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img8.onclick = function () {
if (cardIsFlipped8 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img9.onclick = function () {
if (cardIsFlipped9 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

//Closes modal if x is clicked
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function resetBooster1() {
    const element = document.getElementById('booster1');
    element.classList.remove("flipped");
    boosterIsFlipped1 = 0;
}

function resetBooster2() {
    const element = document.getElementById('booster2');
    element.classList.remove("flipped");
    boosterIsFlipped2 = 0;
}

function resetBooster3() {
    const element = document.getElementById('booster3');
    element.classList.remove("flipped");
    boosterIsFlipped3 = 0;
}

function reset1() {
    const element = document.getElementById('myDiv1');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard1');
    element2.classList.remove("holographic");
    cardIsFlipped1 = 0;
}

function reset2() {
    const element = document.getElementById('myDiv2');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard2');
    element2.classList.remove("holographic");
    cardIsFlipped2 = 0;
}

function reset3() {
    const element = document.getElementById('myDiv3');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard3');
    element2.classList.remove("holographic");
    cardIsFlipped3 = 0;
}

function reset4() {
    const element = document.getElementById('myDiv4');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard4');
    element2.classList.remove("holographic");
    cardIsFlipped4 = 0;
}

function reset5() {
    const element = document.getElementById('myDiv5');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard5');
    element2.classList.remove("holographic");
    cardIsFlipped5 = 0;
}

function reset6() {
    const element = document.getElementById('myDiv6');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard6');
    element2.classList.remove("holographic");
    cardIsFlipped6 = 0;
}

function reset7() {
    const element = document.getElementById('myDiv7');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard7');
    element2.classList.remove("holographic");
    cardIsFlipped7 = 0;
}

function reset8() {
    const element = document.getElementById('myDiv8');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard8');
    element2.classList.remove("holographic");
    cardIsFlipped8 = 0;
}

function reset9() {
    const element = document.getElementById('myDiv9');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard9');
    element2.classList.remove("holographic");
    cardIsFlipped9 = 0;
}

function resetAll() {
    resetBooster1();
    resetBooster2();
    resetBooster3();
    reset1();
    reset2();
    reset3();
    reset4();
    reset5();
    reset6();
    reset7();
    reset8();
    reset9();
}

let cardOrderArray = [
    'randomCard1', 
    'randomCard2', 
    'randomCard3', 
    'randomCard4', 
    'randomCard5', 
    'randomCard6', 
    'randomCard7', 
    'randomCard8', 
    'randomCard9'];

//Creates a method within the Array object to shuffle an array via the Fisher-Yates shuffle
//Thanks to https://www.youtube.com/watch?v=tLxBwSL3lPQ&list=LLW-9kdTXKEKCyK43u9SqarQ&index=6&t=0s for explaining this so well
Array.prototype.shuffle = function() {
    let i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random()* (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this;
}

//Enables random pack button
function randomPack() {
    var randomSet = Math.floor(Math.random()*3 + 1)
    switch(randomSet) {
        case 1:
            newPackExpeditionBase();
            break;
        case 2:
            newPackAquapolis();
            break;
        case 3:
            newPackSkyridge();
            break;
    }
}

//Enables the same set button
let currentSet = 0
function sameSet() {
    switch(currentSet) { 
    case 1:
        newPackExpeditionBase();
        break;
    case 2:
        newPackAquapolis();
        break;
    case 3:
        newPackSkyridge();
        break;
    }
}

//Shuffle starts in off position
//Toggles shuffle array method on or off
let currentShuffle = 0
function toggleShuffle() {
    var topButton = document.getElementById("button5");
    var bottomButton = document.getElementById("button10");
    switch(currentShuffle) {
        //If shuffle button is hit, the suffle function is turned on
        case 0:
            ++currentShuffle;
            topButton.innerHTML = "SHUFFLE (ON)";
            topButton.style.color = "rgb(0,0,255)";
            topButton.style.backgroundColor = "rgb(255,255,0)";
            bottomButton.innerHTML = "SHUFFLE (ON)";
            bottomButton.style.color = "rgb(0,0,255)";
            bottomButton.style.backgroundColor = "rgb(255,255,0)";
            break;
        //If the shuffle button is hit again, the shuffle function is turned off
        case 1:
            --currentShuffle;
            topButton.innerHTML = "SHUFFLE (OFF)";
            topButton.style.color = "rgb(255,255,0)";
            topButton.style.backgroundColor = "rgb(0,0,255)";
            bottomButton.innerHTML = "SHUFFLE (OFF)";
            bottomButton.style.color = "rgb(255,255,0)";
            bottomButton.style.backgroundColor = "rgb(0,0,255)";
            break;
    }
}

//For sets with four variants
let packArt2 = 0
function changePackArt2() {
    if (packArt2 === 4) {
        packArt2 = 1;
    } else {
    ++packArt2;
    }
}

let counter = 0;
let packsOpened = 0;

function resetCounts() {

    resetAll();

    setTimeout(newPackExpeditionBase, 501);

    currentSet = 1;

    counter = 0;
    var element1 = document.getElementById("counter");
    element1.innerHTML = "| packs generated: " + counter;

    packsOpened = 0;
    var element2 = document.getElementById("packsOpened");
    element2.innerHTML = " | packs opened: " + packsOpened + " | ";
}

function increaseCounter() {
    ++counter;
    var element = document.getElementById("counter");
    element.innerHTML = "| packs generated: " + counter;
}

function increasePacksOpened() {
    ++packsOpened;
    var element = document.getElementById("packsOpened");
    element.innerHTML = " | packs opened: " + packsOpened + " | ";
}

//All newPack functions
function newPackExpeditionBase() {

    //Increases pack counter
    increaseCounter();

    //Resets flip counter (to prevent the last card being spammed for the countdown)
    checkFlip = 1;

    //Gives current set symbol
    document.getElementById("set1").src = "expedition-base-set-pokemon-set-symbol.png";
    
    //Gives current set logo
    document.getElementById("setlogo").src = "expeditionlogo.png";
        

    //Shuffles the IDs of cards if user chooses to shuffle; otherwise reverts to fixed order
    if (currentShuffle === 1) {
        cardOrderArray.shuffle();
        //Changes the rarity indicators to question mark
        document.getElementById("rarity1").src = "unown_question_mark.gif";
        document.getElementById("rarity2").src = "unown_question_mark.gif";
        document.getElementById("rarity3").src = "unown_question_mark.gif";
        document.getElementById("rarity4").src = "unown_question_mark.gif";
        document.getElementById("rarity5").src = "unown_question_mark.gif";
        document.getElementById("rarity6").src = "unown_question_mark.gif";
        document.getElementById("rarity7").src = "unown_question_mark.gif";
        document.getElementById("rarity8").src = "unown_question_mark.gif";
        document.getElementById("rarity9").src = "unown_question_mark.gif";
    } else {
        cardOrderArray = [
            'randomCard1', 
            'randomCard2', 
            'randomCard3', 
            'randomCard4', 
            'randomCard5', 
            'randomCard6', 
            'randomCard7', 
            'randomCard8', 
            'randomCard9'];
        //Changes the rarity indicators to be visible
        document.getElementById("rarity1").src = "rarity_common.png"
        document.getElementById("rarity2").src = "rarity_common.png"
        document.getElementById("rarity3").src = "rarity_common.png" 
        document.getElementById("rarity4").src = "rarity_common.png"
        document.getElementById("rarity5").src = "rarity_common.png" //Change to rare if holo is pulled? Or would that ruin the surprise?
        document.getElementById("rarity6").src = "unown_question_mark.gif"
        document.getElementById("rarity7").src = "rarity_rare.png"
        document.getElementById("rarity8").src = "rarity_uncommon.png"
        document.getElementById("rarity9").src = "rarity_uncommon.png"
    }

    //Prepares same set button
    currentSet = 1;
    
    //Changes front and back of first image to indicate the type of pack chosen
    changePackArt2();
    if (packArt2 === 1) {
        document.getElementById("boosterPackFront1").src="expeditionbase1.jpg";
        document.getElementById("boosterPackBack1").src="expeditionbaseback.jpg";
    }
    if (packArt2 === 2) {
        document.getElementById("boosterPackFront1").src="expeditionbase2.jpg";
        document.getElementById("boosterPackBack1").src="expeditionbaseback.jpg";
    }
    if (packArt2 === 3) {
        document.getElementById("boosterPackFront1").src="expeditionbase3.jpg";
        document.getElementById("boosterPackBack1").src="expeditionbaseback.jpg";
    }
    if (packArt2 === 4) {
        document.getElementById("boosterPackFront1").src="expeditionbase4.jpg";
        document.getElementById("boosterPackBack1").src="expeditionbaseback.jpg";
    }

    //Picks 5 commons. I pick them before the reverse holo since the reverse holo CAN be a duplicate
    //of a card already pulled.
    let numOfCommons = expeditionBaseSetLinks[3].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = expeditionBaseSetLinks[3][randomCommon1];
    let newCommon2 = expeditionBaseSetLinks[3][randomCommon2];
    let newCommon3 = expeditionBaseSetLinks[3][randomCommon3];
    let newCommon4 = expeditionBaseSetLinks[3][randomCommon4];
    let newCommon5 = expeditionBaseSetLinks[3][randomCommon5];
    let newId1 = cardOrderArray[0];
    let newId2 = cardOrderArray[1];
    let newId3 = cardOrderArray[2];
    let newId4 = cardOrderArray[3];
    let newId5 = cardOrderArray[4];
    document.getElementById(newId1).src = newCommon1;
    document.getElementById(newId2).src = newCommon2;
    document.getElementById(newId3).src = newCommon3;
    document.getElementById(newId4).src = newCommon4;
    document.getElementById(newId5).src = newCommon5;

    //Prevents duplicate commons
    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5]
    for (let i = 0; i < 5; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --counter;
                    newPackExpeditionBase();
                    return;
            }
        }
    }

    //Determines whether a holo or non-holo is pulled at a 33% chance
    //If holo is pulled, it replaces the 5th common AND a regular rare is pulled
    let chanceOfHolo = Math.floor(Math.random()*3);
    if (chanceOfHolo === 1) {
        let numOfHolos = expeditionBaseSetLinks[0].length;
        let randomHolo = Math.floor(Math.random()*numOfHolos);
        let newHolo = expeditionBaseSetLinks[0][randomHolo];
        let newId5 = cardOrderArray[4];
        document.getElementById(newId5).src = newHolo;
    }
    //Regarless of holo pull, a regular rare is always pulled
    let numOfRares = expeditionBaseSetLinks[1].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = expeditionBaseSetLinks[1][randomRare];
    let newId7 = cardOrderArray[6];
    document.getElementById(newId7).src = newRare;

    //Same process, for 2 uncommons
    let numOfUncommons = expeditionBaseSetLinks[2].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = expeditionBaseSetLinks[2][randomUncommon1];
    let newUncommon2 = expeditionBaseSetLinks[2][randomUncommon2];
    let newId8 = cardOrderArray[7];
    let newId9 = cardOrderArray[8];
    document.getElementById(newId8).src = newUncommon1;
    document.getElementById(newId9).src = newUncommon2;

    //Prevents duplicate uncommons by repeating entire function if duplicate is found
    if (newUncommon1 == newUncommon2) {
        --counter;
        newPackExpeditionBase();
        return;
    }

    //Gives reverse holo, with equal chances of pulling a common, uncommon, or rare
    //This code is placed after picking all other cards so that there's no issue pulling a duplicate reverse holo
    let reverseHoloSet = Math.floor(Math.random()*3);
    let newId6 = cardOrderArray[5]
    switch(reverseHoloSet) {
        case 0:
            let numOfCommons = expeditionBaseSetLinks[3].length;
            let reverseHoloCommon = Math.floor(Math.random()*numOfCommons);
            let newReverseHoloCommon = expeditionBaseSetLinks[3][reverseHoloCommon];
            document.getElementById(newId6).src = newReverseHoloCommon;
            element = document.getElementById(newId6);
            element.className += "holographic";
            break;
        case 1:
            let numOfUncommons = expeditionBaseSetLinks[2].length;
            let reverseHoloUncommon = Math.floor(Math.random()*numOfUncommons);
            let newReverseHoloUncommon = expeditionBaseSetLinks[2][reverseHoloUncommon];
            document.getElementById(newId6).src = newReverseHoloUncommon;
            element = document.getElementById(newId6);
            element.className += "holographic";
            break;
        case 2:
            let numOfRares = expeditionBaseSetLinks[1].length;
            let reverseHoloRare = Math.floor(Math.random()*numOfRares);
            let newReverseHoloRare = expeditionBaseSetLinks[1][reverseHoloRare];
            document.getElementById(newId6).src = newReverseHoloRare;
            element = document.getElementById(newId6);
            element.className += "holographic";
            break;
    }

}

function newPackAquapolis() {

    increaseCounter();
    checkFlip = 1;
    document.getElementById("set2").src = "aquapolis-pokemon-set-symbol.png";
    document.getElementById("setlogo").src = "aquapolislogo.png";
    if (currentShuffle === 1) {
        cardOrderArray.shuffle();
        document.getElementById("rarity1").src = "unown_question_mark.gif";
        document.getElementById("rarity2").src = "unown_question_mark.gif";
        document.getElementById("rarity3").src = "unown_question_mark.gif";
        document.getElementById("rarity4").src = "unown_question_mark.gif";
        document.getElementById("rarity5").src = "unown_question_mark.gif";
        document.getElementById("rarity6").src = "unown_question_mark.gif";
        document.getElementById("rarity7").src = "unown_question_mark.gif";
        document.getElementById("rarity8").src = "unown_question_mark.gif";
        document.getElementById("rarity9").src = "unown_question_mark.gif";
    } else {
        cardOrderArray = [
            'randomCard1', 
            'randomCard2', 
            'randomCard3', 
            'randomCard4', 
            'randomCard5', 
            'randomCard6', 
            'randomCard7', 
            'randomCard8', 
            'randomCard9'];
        document.getElementById("rarity1").src = "rarity_common.png"
        document.getElementById("rarity2").src = "rarity_common.png"
        document.getElementById("rarity3").src = "rarity_common.png" 
        document.getElementById("rarity4").src = "rarity_common.png"
        document.getElementById("rarity5").src = "rarity_common.png" //Change to rare if holo is pulled? Or would that ruin the surprise?
        document.getElementById("rarity6").src = "unown_question_mark.gif"
        document.getElementById("rarity7").src = "rarity_rare.png"
        document.getElementById("rarity8").src = "rarity_uncommon.png"
        document.getElementById("rarity9").src = "rarity_uncommon.png"
    }

    currentSet = 2;
    changePackArt2();
    if (packArt2 === 1) {
        document.getElementById("boosterPackFront2").src="aquapolis1.jpg";
        document.getElementById("boosterPackBack2").src="aquapolisback.jpg";
    }
    if (packArt2 === 2) {
        document.getElementById("boosterPackFront2").src="aquapolis2.jpg";
        document.getElementById("boosterPackBack2").src="aquapolisback.jpg";
    }
    if (packArt2 === 3) {
        document.getElementById("boosterPackFront2").src="aquapolis3.jpg";
        document.getElementById("boosterPackBack2").src="aquapolisback.jpg";
    }
    if (packArt2 === 4) {
        document.getElementById("boosterPackFront2").src="aquapolis4.jpg";
        document.getElementById("boosterPackBack2").src="aquapolisback.jpg";
    }

    //Picks 5 commons. I pick them before the reverse holo since the reverse holo CAN be a duplicate
    //of a card already pulled.
    let numOfCommons = aquapolisLinks[3].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = aquapolisLinks[3][randomCommon1];
    let newCommon2 = aquapolisLinks[3][randomCommon2];
    let newCommon3 = aquapolisLinks[3][randomCommon3];
    let newCommon4 = aquapolisLinks[3][randomCommon4];
    let newCommon5 = aquapolisLinks[3][randomCommon5];
    let newId1 = cardOrderArray[0];
    let newId2 = cardOrderArray[1];
    let newId3 = cardOrderArray[2];
    let newId4 = cardOrderArray[3];
    let newId5 = cardOrderArray[4];
    document.getElementById(newId1).src = newCommon1;
    document.getElementById(newId2).src = newCommon2;
    document.getElementById(newId3).src = newCommon3;
    document.getElementById(newId4).src = newCommon4;
    document.getElementById(newId5).src = newCommon5;

    //Prevents duplicate commons
    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5]
    for (let i = 0; i < 5; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --counter;
                    newPackAquapolis();
                    return;
            }
        }
    }

    //Determines whether a holo or non-holo is pulled at a 33% chance
    //If holo is pulled, it replaces the 5th common AND a regular rare is pulled
    let chanceOfHolo = Math.floor(Math.random()*3);
    if (chanceOfHolo === 1) {
        let numOfHolos = aquapolisLinks[0].length;
        let randomHolo = Math.floor(Math.random()*numOfHolos);
        let newHolo = aquapolisLinks[0][randomHolo];
        let newId5 = cardOrderArray[4];
        document.getElementById(newId5).src = newHolo;
    }
    //Regarless of holo pull, a regular rare is always pulled
    let numOfRares = aquapolisLinks[1].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = aquapolisLinks[1][randomRare];
    let newId7 = cardOrderArray[6];
    document.getElementById(newId7).src = newRare;

    //Same process, for 2 uncommons
    let numOfUncommons = aquapolisLinks[2].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = aquapolisLinks[2][randomUncommon1];
    let newUncommon2 = aquapolisLinks[2][randomUncommon2];
    let newId8 = cardOrderArray[7];
    let newId9 = cardOrderArray[8];
    document.getElementById(newId8).src = newUncommon1;
    document.getElementById(newId9).src = newUncommon2;

    //Prevents duplicate uncommons by repeating entire function if duplicate is found
    if (newUncommon1 == newUncommon2) {
        --counter;
        newPackAquapolis();
        return;
    }

    //Gives reverse holo, with equal chances of pulling a common, uncommon, or rare
    //This code is placed after picking all other cards so that there's no issue pulling a duplicate reverse holo
    let reverseHoloSet = Math.floor(Math.random()*3);
    let newId6 = cardOrderArray[5]
    switch(reverseHoloSet) {
        case 0:
            let numOfCommons = aquapolisLinks[3].length;
            let reverseHoloCommon = Math.floor(Math.random()*numOfCommons);
            let newReverseHoloCommon = aquapolisLinks[3][reverseHoloCommon];
            document.getElementById(newId6).src = newReverseHoloCommon;
            element = document.getElementById(newId6);
            element.className += "holographic";
            break;
        case 1:
            let numOfUncommons = aquapolisLinks[2].length;
            let reverseHoloUncommon = Math.floor(Math.random()*numOfUncommons);
            let newReverseHoloUncommon = aquapolisLinks[2][reverseHoloUncommon];
            document.getElementById(newId6).src = newReverseHoloUncommon;
            element = document.getElementById(newId6);
            element.className += "holographic";
            break;
        case 2:
            let numOfRares = aquapolisLinks[1].length;
            let reverseHoloRare = Math.floor(Math.random()*numOfRares);
            let newReverseHoloRare = aquapolisLinks[1][reverseHoloRare];
            document.getElementById(newId6).src = newReverseHoloRare;
            element = document.getElementById(newId6);
            element.className += "holographic";
            break;
    }
}

function newPackSkyridge() {

    increaseCounter();
    checkFlip = 1;
    document.getElementById("set3").src = "skyridge-pokemon-set-symbol.png";
    document.getElementById("setlogo").src = "skyridgelogo.png";
    if (currentShuffle === 1) {
        cardOrderArray.shuffle();
        document.getElementById("rarity1").src = "unown_question_mark.gif";
        document.getElementById("rarity2").src = "unown_question_mark.gif";
        document.getElementById("rarity3").src = "unown_question_mark.gif";
        document.getElementById("rarity4").src = "unown_question_mark.gif";
        document.getElementById("rarity5").src = "unown_question_mark.gif";
        document.getElementById("rarity6").src = "unown_question_mark.gif";
        document.getElementById("rarity7").src = "unown_question_mark.gif";
        document.getElementById("rarity8").src = "unown_question_mark.gif";
        document.getElementById("rarity9").src = "unown_question_mark.gif";
    } else {
        cardOrderArray = [
            'randomCard1', 
            'randomCard2', 
            'randomCard3', 
            'randomCard4', 
            'randomCard5', 
            'randomCard6', 
            'randomCard7', 
            'randomCard8', 
            'randomCard9'];
        document.getElementById("rarity1").src = "rarity_common.png"
        document.getElementById("rarity2").src = "rarity_common.png"
        document.getElementById("rarity3").src = "rarity_common.png" 
        document.getElementById("rarity4").src = "rarity_common.png"
        document.getElementById("rarity5").src = "rarity_common.png" //Change to rare if holo is pulled? Or would that ruin the surprise?
        document.getElementById("rarity6").src = "unown_question_mark.gif"
        document.getElementById("rarity7").src = "rarity_rare.png"
        document.getElementById("rarity8").src = "rarity_uncommon.png"
        document.getElementById("rarity9").src = "rarity_uncommon.png"
    }

    currentSet = 3;
    changePackArt2();
    if (packArt2 === 1) {
        document.getElementById("boosterPackFront3").src="skyridge1.jpg";
        document.getElementById("boosterPackBack3").src="skyridgeback.jpg";
    }
    if (packArt2 === 2) {
        document.getElementById("boosterPackFront3").src="skyridge2.jpg";
        document.getElementById("boosterPackBack3").src="skyridgeback.jpg";
    }
    if (packArt2 === 3) {
        document.getElementById("boosterPackFront3").src="skyridge3.jpg";
        document.getElementById("boosterPackBack3").src="skyridgeback.jpg";
    }
    if (packArt2 === 4) {
        document.getElementById("boosterPackFront3").src="skyridge4.jpg";
        document.getElementById("boosterPackBack3").src="skyridgeback.jpg";
    }

    //Picks 5 commons. I pick them before the reverse holo since the reverse holo CAN be a duplicate
    //of a card already pulled.
    let numOfCommons = skyridgeLinks[3].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = skyridgeLinks[3][randomCommon1];
    let newCommon2 = skyridgeLinks[3][randomCommon2];
    let newCommon3 = skyridgeLinks[3][randomCommon3];
    let newCommon4 = skyridgeLinks[3][randomCommon4];
    let newCommon5 = skyridgeLinks[3][randomCommon5];
    let newId1 = cardOrderArray[0];
    let newId2 = cardOrderArray[1];
    let newId3 = cardOrderArray[2];
    let newId4 = cardOrderArray[3];
    let newId5 = cardOrderArray[4];
    document.getElementById(newId1).src = newCommon1;
    document.getElementById(newId2).src = newCommon2;
    document.getElementById(newId3).src = newCommon3;
    document.getElementById(newId4).src = newCommon4;
    document.getElementById(newId5).src = newCommon5;

    //Prevents duplicate commons
    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5]
    for (let i = 0; i < 5; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --counter;
                    newPackSkyridge();
                    return;
            }
        }
    }

    //Determines whether a holo or non-holo is pulled at a 33% chance
    //If holo is pulled, it replaces the 5th common AND a regular rare is pulled
    let chanceOfHolo = Math.floor(Math.random()*3);
    if (chanceOfHolo === 1) {
        let numOfHolos = skyridgeLinks[0].length;
        let randomHolo = Math.floor(Math.random()*numOfHolos);
        let newHolo = skyridgeLinks[0][randomHolo];
        let newId5 = cardOrderArray[4];
        document.getElementById(newId5).src = newHolo;
    }
    //Regarless of holo pull, a regular rare is always pulled
    let numOfRares = skyridgeLinks[1].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = skyridgeLinks[1][randomRare];
    let newId7 = cardOrderArray[6];
    document.getElementById(newId7).src = newRare;

    //Same process, for 2 uncommons
    let numOfUncommons = skyridgeLinks[2].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = skyridgeLinks[2][randomUncommon1];
    let newUncommon2 = skyridgeLinks[2][randomUncommon2];
    let newId8 = cardOrderArray[7];
    let newId9 = cardOrderArray[8];
    document.getElementById(newId8).src = newUncommon1;
    document.getElementById(newId9).src = newUncommon2;

    //Prevents duplicate uncommons by repeating entire function if duplicate is found
    if (newUncommon1 == newUncommon2) {
        --counter;
        newPackSkyridge();
        return;
    }

    //Gives reverse holo, with equal chances of pulling a common, uncommon, or rare
    //This code is placed after picking all other cards so that there's no issue pulling a duplicate reverse holo
    let reverseHoloSet = Math.floor(Math.random()*3);
    let newId6 = cardOrderArray[5]
    switch(reverseHoloSet) {
        case 0:
            let numOfCommons = skyridgeLinks[3].length;
            let reverseHoloCommon = Math.floor(Math.random()*numOfCommons);
            let newReverseHoloCommon = skyridgeLinks[3][reverseHoloCommon];
            document.getElementById(newId6).src = newReverseHoloCommon;
            element = document.getElementById(newId6);
            element.className += "holographic";
            break;
        case 1:
            let numOfUncommons = skyridgeLinks[2].length;
            let reverseHoloUncommon = Math.floor(Math.random()*numOfUncommons);
            let newReverseHoloUncommon = skyridgeLinks[2][reverseHoloUncommon];
            document.getElementById(newId6).src = newReverseHoloUncommon;
            element = document.getElementById(newId6);
            element.className += "holographic";
            break;
        case 2:
            let numOfRares = skyridgeLinks[1].length;
            let reverseHoloRare = Math.floor(Math.random()*numOfRares);
            let newReverseHoloRare = skyridgeLinks[1][reverseHoloRare];
            document.getElementById(newId6).src = newReverseHoloRare;
            element = document.getElementById(newId6);
            element.className += "holographic";
            break;
    }
}


//Arrays of all card sets
const expeditionBaseSetLinks = [

    //Holofoil rares at index 0
    ['https://pkmncards.com/wp-content/uploads/alakazam-expedition-ex-1.jpg',
    'https://pkmncards.com/wp-content/uploads/ampharos-expedition-ex-2.jpg',
    'https://pkmncards.com/wp-content/uploads/arbok-expedition-ex-3.jpg',
    'https://pkmncards.com/wp-content/uploads/blastoise-expedition-ex-4.jpg',
    'https://pkmncards.com/wp-content/uploads/butterfree-expedition-ex-5.jpg',
    'https://pkmncards.com/wp-content/uploads/charizard-expedition-ex-6.jpg',
    'https://pkmncards.com/wp-content/uploads/clefable-expedition-ex-7.jpg',
    'https://pkmncards.com/wp-content/uploads/cloyster-expedition-ex-8.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonite-expedition-ex-9.jpg',
    'https://pkmncards.com/wp-content/uploads/dugtrio-expedition-ex-10.jpg',
    'https://pkmncards.com/wp-content/uploads/fearow-expedition-ex-11.jpg',
    'https://pkmncards.com/wp-content/uploads/feraligatr-expedition-ex-12.jpg',
    'https://pkmncards.com/wp-content/uploads/gengar-expedition-ex-13.jpg',
    'https://pkmncards.com/wp-content/uploads/golem-expedition-ex-14.jpg',
    'https://pkmncards.com/wp-content/uploads/kingler-expedition-ex-15.jpg',
    'https://pkmncards.com/wp-content/uploads/machamp-expedition-ex-16.jpg',
    'https://pkmncards.com/wp-content/uploads/magby-expedition-ex-17.jpg',
    'https://pkmncards.com/wp-content/uploads/meganium-expedition-ex-18.jpg',
    'https://pkmncards.com/wp-content/uploads/mew-expedition-ex-19.jpg',
    'https://pkmncards.com/wp-content/uploads/mewtwo-expedition-ex-20.jpg',
    'https://pkmncards.com/wp-content/uploads/ninetales-expedition-ex-21.jpg',
    'https://pkmncards.com/wp-content/uploads/pichu-expedition-ex-22.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeot-expedition-ex-23.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwrath-expedition-ex-24.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-expedition-ex-25.jpg',
    'https://pkmncards.com/wp-content/uploads/rapidash-expedition-ex-26.jpg',
    'https://pkmncards.com/wp-content/uploads/skarmory-expedition-ex-27.jpg',
    'https://pkmncards.com/wp-content/uploads/typhlosion-expedition-ex-28.jpg',
    'https://pkmncards.com/wp-content/uploads/tyranitar-expedition-ex-29.jpg',
    'https://pkmncards.com/wp-content/uploads/venusaur-expedition-ex-30.jpg',
    'https://pkmncards.com/wp-content/uploads/vileplume-expedition-ex-31.jpg',
    'https://pkmncards.com/wp-content/uploads/weezing-expedition-ex-32.jpg'],

    //Regular rares at index 1
    ['https://pkmncards.com/wp-content/uploads/alakazam-expedition-ex-33.jpg',
    'https://pkmncards.com/wp-content/uploads/ampharos-expedition-ex-34.jpg',
    'https://pkmncards.com/wp-content/uploads/arbok-expedition-ex-35.jpg',
    'https://pkmncards.com/wp-content/uploads/blastoise-expedition-ex-36.jpg',
    'https://pkmncards.com/wp-content/uploads/blastoise-expedition-ex-37.jpg',
    'https://pkmncards.com/wp-content/uploads/butterfree-expedition-ex-38.jpg',
    'https://pkmncards.com/wp-content/uploads/charizard-expedition-ex-39.jpg',
    'https://pkmncards.com/wp-content/uploads/charizard-expedition-ex-40.jpg',
    'https://pkmncards.com/wp-content/uploads/clefable-expedition-ex-41.jpg',
    'https://pkmncards.com/wp-content/uploads/cloyster-expedition-ex-42.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonite-expedition-ex-43.jpg',
    'https://pkmncards.com/wp-content/uploads/dugtrio-expedition-ex-44.jpg',
    'https://pkmncards.com/wp-content/uploads/fearow-expedition-ex-45.jpg',
    'https://pkmncards.com/wp-content/uploads/feraligatr-expedition-ex-46.jpg',
    'https://pkmncards.com/wp-content/uploads/feraligatr-expedition-ex-47.jpg',
    'https://pkmncards.com/wp-content/uploads/gengar-expedition-ex-48.jpg',
    'https://pkmncards.com/wp-content/uploads/golem-expedition-ex-49.jpg',
    'https://pkmncards.com/wp-content/uploads/kingler-expedition-ex-50.jpg',
    'https://pkmncards.com/wp-content/uploads/machamp-expedition-ex-51.jpg',
    'https://pkmncards.com/wp-content/uploads/magby-expedition-ex-52.jpg',
    'https://pkmncards.com/wp-content/uploads/meganium-expedition-ex-53.jpg',
    'https://pkmncards.com/wp-content/uploads/meganium-expedition-ex-54.jpg',
    'https://pkmncards.com/wp-content/uploads/mew-expedition-ex-55.jpg',
    'https://pkmncards.com/wp-content/uploads/mewtwo-expedition-ex-56.jpg',
    'https://pkmncards.com/wp-content/uploads/ninetales-expedition-ex-57.jpg',
    'https://pkmncards.com/wp-content/uploads/pichu-expedition-ex-58.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeot-expedition-ex-59.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwrath-expedition-ex-60.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-expedition-ex-61.jpg',
    'https://pkmncards.com/wp-content/uploads/rapidash-expedition-ex-62.jpg',
    'https://pkmncards.com/wp-content/uploads/skarmory-expedition-ex-63.jpg',
    'https://pkmncards.com/wp-content/uploads/typhlosion-expedition-ex-64.jpg',
    'https://pkmncards.com/wp-content/uploads/typhlosion-expedition-ex-65.jpg',
    'https://pkmncards.com/wp-content/uploads/tyranitar-expedition-ex-66.jpg',
    'https://pkmncards.com/wp-content/uploads/venusaur-expedition-ex-67.jpg',
    'https://pkmncards.com/wp-content/uploads/venusaur-expedition-ex-68.jpg',
    'https://pkmncards.com/wp-content/uploads/vileplume-expedition-ex-69.jpg',
    'https://pkmncards.com/wp-content/uploads/weezing-expedition-ex-70.jpg',
    'https://pkmncards.com/wp-content/uploads/darkness-energy-expedition-ex-158.jpg',
    'https://pkmncards.com/wp-content/uploads/metal-energy-expedition-ex-159.jpg'],

    //Uncommons at index 2
    ['https://pkmncards.com/wp-content/uploads/bayleef-expedition-ex-71.jpg',
    'https://pkmncards.com/wp-content/uploads/chansey-expedition-ex-72.jpg',
    'https://pkmncards.com/wp-content/uploads/charmeleon-expedition-ex-73.jpg',
    'https://pkmncards.com/wp-content/uploads/croconaw-expedition-ex-74.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonair-expedition-ex-75.jpg',
    'https://pkmncards.com/wp-content/uploads/electabuzz-expedition-ex-76.jpg',
    'https://pkmncards.com/wp-content/uploads/flaaffy-expedition-ex-77.jpg',
    'https://pkmncards.com/wp-content/uploads/gloom-expedition-ex-78.jpg',
    'https://pkmncards.com/wp-content/uploads/graveler-expedition-ex-79.jpg',
    'https://pkmncards.com/wp-content/uploads/haunter-expedition-ex-80.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmonlee-expedition-ex-81.jpg',
    'https://pkmncards.com/wp-content/uploads/ivysaur-expedition-ex-82.jpg',
    'https://pkmncards.com/wp-content/uploads/jynx-expedition-ex-83.jpg',
    'https://pkmncards.com/wp-content/uploads/kadabra-expedition-ex-84.jpg',
    'https://pkmncards.com/wp-content/uploads/machoke-expedition-ex-85.jpg',
    'https://pkmncards.com/wp-content/uploads/magmar-expedition-ex-86.jpg',
    'https://pkmncards.com/wp-content/uploads/metapod-expedition-ex-87.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeotto-expedition-ex-88.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwhirl-expedition-ex-89.jpg',
    'https://pkmncards.com/wp-content/uploads/pupitar-expedition-ex-90.jpg',
    'https://pkmncards.com/wp-content/uploads/quilava-expedition-ex-91.jpg',
    'https://pkmncards.com/wp-content/uploads/wartortle-expedition-ex-92.jpg',
    'https://pkmncards.com/wp-content/uploads/bills-maintenance-expedition-ex-137.jpg',
    'https://pkmncards.com/wp-content/uploads/copycat-expedition-ex-138.jpg',
    'https://pkmncards.com/wp-content/uploads/dual-ball-expedition-ex-139.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-removal-2-expedition-ex-140.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-restore-expedition-ex-141.jpg',
    'https://pkmncards.com/wp-content/uploads/marys-impulse-expedition-ex-142.jpg',
    'https://pkmncards.com/wp-content/uploads/master-ball-expedition-ex-143.jpg',
    'https://pkmncards.com/wp-content/uploads/multi-technical-machine-01-expedition-ex-144.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-nurse-expedition-ex-145.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-reversal-expedition-ex-146.jpg',
    'https://pkmncards.com/wp-content/uploads/power-charge-expedition-ex-147.jpg',
    'https://pkmncards.com/wp-content/uploads/professor-elms-training-method-expedition-ex-148.jpg',
    'https://pkmncards.com/wp-content/uploads/professor-oaks-research-expedition-ex-149.jpg',
    'https://pkmncards.com/wp-content/uploads/strength-charm-expedition-ex-150.jpg',
    'https://pkmncards.com/wp-content/uploads/super-scoop-up-expedition-ex-151.jpg',
    'https://pkmncards.com/wp-content/uploads/warp-point-expedition-ex-152.jpg'],

    //Commons at index 3
    ['https://pkmncards.com/wp-content/uploads/abra-expedition-ex-93.jpg',
    'https://pkmncards.com/wp-content/uploads/bulbasaur-expedition-ex-94.jpg',
    'https://pkmncards.com/wp-content/uploads/bulbasaur-expedition-ex-95.jpg',
    'https://pkmncards.com/wp-content/uploads/caterpie-expedition-ex-96.jpg',
    'https://pkmncards.com/wp-content/uploads/charmander-expedition-ex-97.jpg',
    'https://pkmncards.com/wp-content/uploads/charmander-expedition-ex-98.jpg',
    'https://pkmncards.com/wp-content/uploads/chikorita-expedition-ex-99.jpg',
    'https://pkmncards.com/wp-content/uploads/chikorita-expedition-ex-100.jpg',
    'https://pkmncards.com/wp-content/uploads/clefairy-expedition-ex-101.jpg',
    'https://pkmncards.com/wp-content/uploads/corsola-expedition-ex-102.jpg',
    'https://pkmncards.com/wp-content/uploads/cubone-expedition-ex-103.jpg',
    'https://pkmncards.com/wp-content/uploads/cyndaquil-expedition-ex-104.jpg',
    'https://pkmncards.com/wp-content/uploads/cyndaquil-expedition-ex-105.jpg',
    'https://pkmncards.com/wp-content/uploads/diglett-expedition-ex-106.jpg',
    'https://pkmncards.com/wp-content/uploads/dratini-expedition-ex-107.jpg',
    'https://pkmncards.com/wp-content/uploads/ekans-expedition-ex-108.jpg',
    'https://pkmncards.com/wp-content/uploads/gastly-expedition-ex-109.jpg',
    'https://pkmncards.com/wp-content/uploads/geodude-expedition-ex-110.jpg',
    'https://pkmncards.com/wp-content/uploads/goldeen-expedition-ex-111.jpg',
    'https://pkmncards.com/wp-content/uploads/hoppip-expedition-ex-112.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-expedition-ex-113.jpg',
    'https://pkmncards.com/wp-content/uploads/koffing-expedition-ex-114.jpg',
    'https://pkmncards.com/wp-content/uploads/krabby-expedition-ex-115.jpg',
    'https://pkmncards.com/wp-content/uploads/larvitar-expedition-ex-116.jpg',
    'https://pkmncards.com/wp-content/uploads/machop-expedition-ex-117.jpg',
    'https://pkmncards.com/wp-content/uploads/magikarp-expedition-ex-118.jpg',
    'https://pkmncards.com/wp-content/uploads/mareep-expedition-ex-119.jpg',
    'https://pkmncards.com/wp-content/uploads/marill-expedition-ex-120.jpg',
    'https://pkmncards.com/wp-content/uploads/meowth-expedition-ex-121.jpg',
    'https://pkmncards.com/wp-content/uploads/oddish-expedition-ex-122.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgey-expedition-ex-123.jpg',
    'https://pkmncards.com/wp-content/uploads/pikachu-expedition-ex-124.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwag-expedition-ex-125.jpg',
    'https://pkmncards.com/wp-content/uploads/ponyta-expedition-ex-126.jpg',
    'https://pkmncards.com/wp-content/uploads/qwilfish-expedition-ex-127.jpg',
    'https://pkmncards.com/wp-content/uploads/rattata-expedition-ex-128.jpg',
    'https://pkmncards.com/wp-content/uploads/shellder-expedition-ex-129.jpg',
    'https://pkmncards.com/wp-content/uploads/spearow-expedition-ex-130.jpg',
    'https://pkmncards.com/wp-content/uploads/squirtle-expedition-ex-131.jpg',
    'https://pkmncards.com/wp-content/uploads/squirtle-expedition-ex-132.jpg',
    'https://pkmncards.com/wp-content/uploads/tauros-expedition-ex-133.jpg',
    'https://pkmncards.com/wp-content/uploads/totodile-expedition-ex-134.jpg',
    'https://pkmncards.com/wp-content/uploads/totodile-expedition-ex-135.jpg',
    'https://pkmncards.com/wp-content/uploads/vulpix-expedition-ex-136.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-search-expedition-ex-153.jpg',
    'https://pkmncards.com/wp-content/uploads/full-heal-expedition-ex-154.jpg',
    'https://pkmncards.com/wp-content/uploads/moo-moo-milk-expedition-ex-155.jpg',
    'https://pkmncards.com/wp-content/uploads/potion-expedition-ex-156.jpg',
    'https://pkmncards.com/wp-content/uploads/switch-expedition-ex-157.jpg',
    'https://pkmncards.com/wp-content/uploads/fighting-energy-expedition-ex-160.jpg',
    'https://pkmncards.com/wp-content/uploads/fire-energy-expedition-ex-161.jpg',
    'https://pkmncards.com/wp-content/uploads/grass-energy-expedition-ex-162.jpg',
    'https://pkmncards.com/wp-content/uploads/lightning-energy-expedition-ex-163.jpg',
    'https://pkmncards.com/wp-content/uploads/psychic-energy-expedition-ex-164.jpg',
    'https://pkmncards.com/wp-content/uploads/water-energy-expedition-ex-165.jpg'],

]

const aquapolisLinks = [

    //Holofoil rares at index 0
    ['https://pkmncards.com/wp-content/uploads/h01-ampharos-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h02-arcanaine-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h03-ariados-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h04-azumarill-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h05-bellossom-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h06-blissey-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h07-electrode-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h08-entei-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h09-espeon-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h10-exeggutor-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h11-houndoom-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h12-hypno-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h13-jumpluff-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h14-kingdra-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h15-lanturn-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h16-magneton-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h17-muk-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h18-nidoking-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h19-ninetales-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h20-octillery-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h21-scizor-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h22-slowking-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h23-steelix-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h24-sudowoodo-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h25-suicune-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h26-tentacruel-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h27-togetic-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h28-tyranitar-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h29-umbreon-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h30-victreebel-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h31-vileplume-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h32-zapdos-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/warp-energy-aquapolis-aq-147.jpg', //Increase the rarity of these secret rares
    'https://pkmncards.com/wp-content/uploads/kingdra-aquapolis-aq-148.jpg',
    'https://pkmncards.com/wp-content/uploads/lugia-aquapolis-aq-149.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoking-aquapolis-aq-150.jpg'],

    //Rares at index 1
    ['https://pkmncards.com/wp-content/uploads/ampharos-aquapolis-aq-1.jpg',
    'https://pkmncards.com/wp-content/uploads/arcanine-aquapolis-aq-2.jpg',
    'https://pkmncards.com/wp-content/uploads/ariados-aquapolis-aq-3.jpg',
    'https://pkmncards.com/wp-content/uploads/azumarill-aquapolis-aq-4.jpg',
    'https://pkmncards.com/wp-content/uploads/bellossom-aquapolis-aq-5.jpg',
    'https://pkmncards.com/wp-content/uploads/blissey-aquapolis-aq-6.jpg',
    'https://pkmncards.com/wp-content/uploads/donphan-aquapolis-aq-7.jpg',
    'https://pkmncards.com/wp-content/uploads/electrode-aquapolis-aq-8.jpg',
    'https://pkmncards.com/wp-content/uploads/elekid-aquapolis-aq-9.jpg',
    'https://pkmncards.com/wp-content/uploads/entei-aquapolis-aq-10.jpg',
    'https://pkmncards.com/wp-content/uploads/espeon-aquapolis-aq-11.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggutor-aquapolis-aq-12.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggutor-aquapolis-aq-13.jpg',
    'https://pkmncards.com/wp-content/uploads/houndoom-aquapolis-aq-14.jpg',
    'https://pkmncards.com/wp-content/uploads/houndoom-aquapolis-aq-15.jpg',
    'https://pkmncards.com/wp-content/uploads/hypno-aquapolis-aq-16.jpg',
    'https://pkmncards.com/wp-content/uploads/jumpluff-aquapolis-aq-17.jpg',
    'https://pkmncards.com/wp-content/uploads/jynx-aquapolis-aq-18.jpg',
    'https://pkmncards.com/wp-content/uploads/kingdra-aquapolis-aq-19.jpg',
    'https://pkmncards.com/wp-content/uploads/lanturn-aquapolis-aq-20.jpg',
    'https://pkmncards.com/wp-content/uploads/lanturn-aquapolis-aq-21.jpg',
    'https://pkmncards.com/wp-content/uploads/magneton-aquapolis-aq-22.jpg',
    'https://pkmncards.com/wp-content/uploads/muk-aquapolis-aq-23.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoking-aquapolis-aq-24.jpg',
    'https://pkmncards.com/wp-content/uploads/ninetales-aquapolis-aq-25.jpg',
    'https://pkmncards.com/wp-content/uploads/octillery-aquapolis-aq-26.jpg',
    'https://pkmncards.com/wp-content/uploads/parasect-aquapolis-aq-27.jpg',
    'https://pkmncards.com/wp-content/uploads/porygon2-aquapolis-aq-28.jpg',
    'https://pkmncards.com/wp-content/uploads/primeape-aquapolis-aq-29.jpg',
    'https://pkmncards.com/wp-content/uploads/quagsire-aquapolis-aq-30.jpg',
    'https://pkmncards.com/wp-content/uploads/rapidash-aquapolis-aq-31.jpg',
    'https://pkmncards.com/wp-content/uploads/scizor-aquapolis-aq-32.jpg',
    'https://pkmncards.com/wp-content/uploads/slowbro-aquapolis-aq-33.jpg',
    'https://pkmncards.com/wp-content/uploads/slowking-aquapolis-aq-34.jpg',
    'https://pkmncards.com/wp-content/uploads/steelix-aquapolis-aq-35.jpg',
    'https://pkmncards.com/wp-content/uploads/sudowoodo-aquapolis-aq-36.jpg',
    'https://pkmncards.com/wp-content/uploads/suicune-aquapolis-aq-37.jpg',
    'https://pkmncards.com/wp-content/uploads/tentacruel-aquapolis-aq-38.jpg',
    'https://pkmncards.com/wp-content/uploads/togetic-aquapolis-aq-39.jpg',
    'https://pkmncards.com/wp-content/uploads/tyranitar-aquapolis-aq-40.jpg',
    'https://pkmncards.com/wp-content/uploads/umbreon-aquapolis-aq-41.jpg',
    'https://pkmncards.com/wp-content/uploads/victreebel-aquapolis-aq-42.jpg',
    'https://pkmncards.com/wp-content/uploads/vileplume-aquapolis-aq-43.jpg',
    'https://pkmncards.com/wp-content/uploads/zapdos-aquapolis-aq-44.jpg',
    'https://pkmncards.com/wp-content/uploads/apricorn-forest-aquapolis-aq-118.jpg',
    'https://pkmncards.com/wp-content/uploads/darkness-energy-aquapolis-aq-142.jpg',
    'https://pkmncards.com/wp-content/uploads/metal-energy-aquapolis-aq-143.jpg',
    'https://pkmncards.com/wp-content/uploads/rainbow-energy-aquapolis-aq-144.jpg'],

    //Uncommons at index 2
    ['https://pkmncards.com/wp-content/uploads/bellsprout-aquapolis-aq-45.jpg',
    'https://pkmncards.com/wp-content/uploads/dodrio-aquapolis-aq-46.jpg',
    'https://pkmncards.com/wp-content/uploads/flaaffy-aquapolis-aq-47.jpg',
    'https://pkmncards.com/wp-content/uploads/furret-aquapolis-aq-48.jpg',
    'https://pkmncards.com/wp-content/uploads/gloom-aquapolis-aq-49.jpg',
    'https://pkmncards.com/wp-content/uploads/golduck-aquapolis-aq-50.jpg',
    'https://pkmncards.com/wp-content/uploads/growlithe-aquapolis-aq-51.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-aquapolis-aq-52.jpg',
    'https://pkmncards.com/wp-content/uploads/marill-aquapolis-aq-53.jpg',
    'https://pkmncards.com/wp-content/uploads/marowak-aquapolis-aq-54.jpg',
    'https://pkmncards.com/wp-content/uploads/nidorino-aquapolis-aq-55.jpg',
    'https://pkmncards.com/wp-content/uploads/pupitar-aquapolis-aq-56.jpg',
    'https://pkmncards.com/wp-content/uploads/scyther-aquapolis-aq-57.jpg',
    'https://pkmncards.com/wp-content/uploads/seadra-aquapolis-aq-58.jpg',
    'https://pkmncards.com/wp-content/uploads/seaking-aquapolis-aq-59.jpg',
    'https://pkmncards.com/wp-content/uploads/skiploom-aquapolis-aq-60.jpg',
    'https://pkmncards.com/wp-content/uploads/smoochum-aquapolis-aq-61.jpg',
    'https://pkmncards.com/wp-content/uploads/spinarak-aquapolis-aq-62.jpg',
    'https://pkmncards.com/wp-content/uploads/tyrogue-aquapolis-aq-63.jpg',
    'https://pkmncards.com/wp-content/uploads/voltorb-aquapolis-aq-64.jpg',
    'https://pkmncards.com/wp-content/uploads/weepinbell-aquapolis-aq-65.jpg',
    'https://pkmncards.com/wp-content/uploads/wooper-aquapolis-aq-66.jpg',
    'https://pkmncards.com/wp-content/uploads/darkness-cube-01-aquapolis-aq-119.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-switch-aquapolis-aq-120.jpg',
    'https://pkmncards.com/wp-content/uploads/fighting-cube-01-aquapolis-aq-121.jpg',
    'https://pkmncards.com/wp-content/uploads/fire-cube-01-aquapolis-aq-122.jpg',
    'https://pkmncards.com/wp-content/uploads/forest-guardian-aquapolis-aq-123.jpg',
    'https://pkmncards.com/wp-content/uploads/grass-cube-01-aquapolis-aq-124.jpg',
    'https://pkmncards.com/wp-content/uploads/healing-berry-aquapolis-aq-125.jpg',
    'https://pkmncards.com/wp-content/uploads/juggler-aquapolis-aq-126.jpg',
    'https://pkmncards.com/wp-content/uploads/lightning-cube-01-aquapolis-aq-127.jpg',
    'https://pkmncards.com/wp-content/uploads/memory-berry-aquapolis-aq-128.jpg',
    'https://pkmncards.com/wp-content/uploads/metal-cube-01-aquapolis-aq-129.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-fan-club-aquapolis-aq-130.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-park-aquapolis-aq-131.jpg',
    'https://pkmncards.com/wp-content/uploads/psychic-cube-01-aquapolis-aq-132.jpg',
    'https://pkmncards.com/wp-content/uploads/seer-aquapolis-aq-133.jpg',
    'https://pkmncards.com/wp-content/uploads/super-energy-removal-2-aquapolis-aq-134.jpg',
    'https://pkmncards.com/wp-content/uploads/time-shard-aquapolis-aq-135.jpg',
    'https://pkmncards.com/wp-content/uploads/town-volunteers-aquapolis-aq-136.jpg',
    'https://pkmncards.com/wp-content/uploads/traveling-salesman-aquapolis-aq-137.jpg',
    'https://pkmncards.com/wp-content/uploads/undersea-ruins-aquapolis-aq-138.jpg',
    'https://pkmncards.com/wp-content/uploads/power-plant-aquapolis-aq-139.jpg',
    'https://pkmncards.com/wp-content/uploads/water-cube-01-aquapolis-aq-140.jpg',
    'https://pkmncards.com/wp-content/uploads/weakness-guard-aquapolis-aq-141.jpg',
    'https://pkmncards.com/wp-content/uploads/boost-energy-aquapolis-aq-145.jpg',
    'https://pkmncards.com/wp-content/uploads/crystal-energy-aquapolis-aq-146.jpg',
    'https://pkmncards.com/wp-content/uploads/warp-energy-aquapolis-aq-147.jpg'],

    //Commons at index 3
    ['https://pkmncards.com/wp-content/uploads/aipom-aquapolis-aq-67.jpg',
    'https://pkmncards.com/wp-content/uploads/bellsprout-aquapolis-aq-68.jpg',
    'https://pkmncards.com/wp-content/uploads/chansey-aquapolis-aq-69.jpg',
    'https://pkmncards.com/wp-content/uploads/chinchou-aquapolis-aq-70.jpg',
    'https://pkmncards.com/wp-content/uploads/chinchou-aquapolis-aq-71.jpg',
    'https://pkmncards.com/wp-content/uploads/cubone-aquapolis-aq-72.jpg',
    'https://pkmncards.com/wp-content/uploads/doduo-aquapolis-aq-73.jpg',
    'https://pkmncards.com/wp-content/uploads/drowzee-aquapolis-aq-74.jpg',
    'https://pkmncards.com/wp-content/uploads/eevee-aquapolis-aq-75.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggcute-aquapolis-aq-76.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggcute-aquapolis-aq-77.jpg',
    'https://pkmncards.com/wp-content/uploads/goldeen-aquapolis-aq-78.jpg',
    'https://pkmncards.com/wp-content/uploads/grimer-aquapolis-aq-79.jpg',
    'https://pkmncards.com/wp-content/uploads/growlithe-aquapolis-aq-80.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmonchan-aquapolis-aq-81.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmontop-aquapolis-aq-82.jpg',
    'https://pkmncards.com/wp-content/uploads/hoppip-aquapolis-aq-83.jpg',
    'https://pkmncards.com/wp-content/uploads/horsea-aquapolis-aq-84.jpg',
    'https://pkmncards.com/wp-content/uploads/horsea-aquapolis-aq-85.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-aquapolis-aq-86.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-aquapolis-aq-87.jpg',
    'https://pkmncards.com/wp-content/uploads/kangaskhan-aquapolis-aq-88.jpg',
    'https://pkmncards.com/wp-content/uploads/larvitar-aquapolis-aq-89.jpg',
    'https://pkmncards.com/wp-content/uploads/lickitung-aquapolis-aq-90.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-aquapolis-aq-91.jpg',
    'https://pkmncards.com/wp-content/uploads/mankey-aquapolis-aq-92.jpg',
    'https://pkmncards.com/wp-content/uploads/mareep-aquapolis-aq-93.jpg',
    'https://pkmncards.com/wp-content/uploads/miltank-aquapolis-aq-94.jpg',
    'https://pkmncards.com/wp-content/uploads/mr.-mime-aquapolis-aq-95.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-male-aquapolis-aq-96.jpg',
    'https://pkmncards.com/wp-content/uploads/oddish-aquapolis-aq-97.jpg',
    'https://pkmncards.com/wp-content/uploads/onix-aquapolis-aq-98.jpg',
    'https://pkmncards.com/wp-content/uploads/paras-aquapolis-aq-99.jpg',
    'https://pkmncards.com/wp-content/uploads/phanpy-aquapolis-aq-100.jpg',
    'https://pkmncards.com/wp-content/uploads/pinsir-aquapolis-aq-101.jpg',
    'https://pkmncards.com/wp-content/uploads/ponyta-aquapolis-aq-102.jpg',
    'https://pkmncards.com/wp-content/uploads/porygon-aquapolis-aq-103.jpg',
    'https://pkmncards.com/wp-content/uploads/psyduck-aquapolis-aq-104.jpg',
    'https://pkmncards.com/wp-content/uploads/remoraid-aquapolis-aq-105.jpg',
    'https://pkmncards.com/wp-content/uploads/scyther-aquapolis-aq-106.jpg',
    'https://pkmncards.com/wp-content/uploads/sentret-aquapolis-aq-107.jpg',
    'https://pkmncards.com/wp-content/uploads/slowpoke-aquapolis-aq-108.jpg',
    'https://pkmncards.com/wp-content/uploads/smeargle-aquapolis-aq-109.jpg',
    'https://pkmncards.com/wp-content/uploads/sneasel-aquapolis-aq-110.jpg',
    'https://pkmncards.com/wp-content/uploads/spinarak-aquapolis-aq-111.jpg',
    'https://pkmncards.com/wp-content/uploads/tangela-aquapolis-aq-112.jpg',
    'https://pkmncards.com/wp-content/uploads/tentacool-aquapolis-aq-113.jpg',
    'https://pkmncards.com/wp-content/uploads/togepi-aquapolis-aq-114.jpg',
    'https://pkmncards.com/wp-content/uploads/voltorb-aquapolis-aq-115.jpg',
    'https://pkmncards.com/wp-content/uploads/vulpix-aquapolis-aq-116.jpg',
    'https://pkmncards.com/wp-content/uploads/wooper-aquapolis-aq-117.jpg'],

]

const skyridgeLinks = [

    //Holofoil rares at index 0
    ['https://pkmncards.com/wp-content/uploads/h01.jpg',
    'https://pkmncards.com/wp-content/uploads/h02.jpg',
    'https://pkmncards.com/wp-content/uploads/h03.jpg',
    'https://pkmncards.com/wp-content/uploads/h04.jpg',
    'https://pkmncards.com/wp-content/uploads/h05.jpg',
    'https://pkmncards.com/wp-content/uploads/h06.jpg',
    'https://pkmncards.com/wp-content/uploads/h07.jpg',
    'https://pkmncards.com/wp-content/uploads/h08.jpg',
    'https://pkmncards.com/wp-content/uploads/h09.jpg',
    'https://pkmncards.com/wp-content/uploads/h10.jpg',
    'https://pkmncards.com/wp-content/uploads/h11.jpg',
    'https://pkmncards.com/wp-content/uploads/h12.jpg',
    'https://pkmncards.com/wp-content/uploads/h13.jpg',
    'https://pkmncards.com/wp-content/uploads/h14.jpg',
    'https://pkmncards.com/wp-content/uploads/h15.jpg',
    'https://pkmncards.com/wp-content/uploads/h16.jpg',
    'https://pkmncards.com/wp-content/uploads/h17.jpg',
    'https://pkmncards.com/wp-content/uploads/h18.jpg',
    'https://pkmncards.com/wp-content/uploads/h19.jpg',
    'https://pkmncards.com/wp-content/uploads/h20.jpg',
    'https://pkmncards.com/wp-content/uploads/h21.jpg',
    'https://pkmncards.com/wp-content/uploads/h22.jpg',
    'https://pkmncards.com/wp-content/uploads/h23.jpg',
    'https://pkmncards.com/wp-content/uploads/h24.jpg',
    'https://pkmncards.com/wp-content/uploads/h25.jpg',
    'https://pkmncards.com/wp-content/uploads/h26.jpg',
    'https://pkmncards.com/wp-content/uploads/h27.jpg',
    'https://pkmncards.com/wp-content/uploads/h28.jpg',
    'https://pkmncards.com/wp-content/uploads/h29.jpg',
    'https://pkmncards.com/wp-content/uploads/h30.jpg',
    'https://pkmncards.com/wp-content/uploads/h31.jpg',
    'https://pkmncards.com/wp-content/uploads/h32.jpg',
    'https://pkmncards.com/wp-content/uploads/celebi-skyridge-sk-145.jpg',  // Increase rarity of these secret rares
    'https://pkmncards.com/wp-content/uploads/charizard-skyridge-sk-146.jpg',
    'https://pkmncards.com/wp-content/uploads/crobat-skyridge-sk-147.jpg',
    'https://pkmncards.com/wp-content/uploads/golem-skyridge-sk-148.jpg',
    'https://pkmncards.com/wp-content/uploads/ho-oh-skyridge-sk-149.jpg',
    'https://pkmncards.com/wp-content/uploads/kabutops-skyridge-sk-150.jpg'],

    //Rares at index 1

    ['https://pkmncards.com/wp-content/uploads/aerodactyl-skyridge-sk-1.jpg',
    'https://pkmncards.com/wp-content/uploads/alakazam-skyridge-sk-2.jpg',
    'https://pkmncards.com/wp-content/uploads/arcanine-skyridge-sk-3.jpg',
    'https://pkmncards.com/wp-content/uploads/articuno-skyridge-sk-4.jpg',
    'https://pkmncards.com/wp-content/uploads/beedrill-skyridge-sk-5.jpg',
    'https://pkmncards.com/wp-content/uploads/crobat-skyridge-sk-6.jpg',
    'https://pkmncards.com/wp-content/uploads/dewgong-skyridge-sk-7.jpg',
    'https://pkmncards.com/wp-content/uploads/flareon-skyridge-sk-8.jpg',
    'https://pkmncards.com/wp-content/uploads/forretress-skyridge-sk-9.jpg',
    'https://pkmncards.com/wp-content/uploads/gengar-skyridge-sk-10.jpg',
    'https://pkmncards.com/wp-content/uploads/gyarados-skyridge-sk-11.jpg',
    'https://pkmncards.com/wp-content/uploads/houndoom-skyridge-sk-12.jpg',
    'https://pkmncards.com/wp-content/uploads/jolteon-skyridge-sk-13.jpg',
    'https://pkmncards.com/wp-content/uploads/kabutops-skyridge-sk-14.jpg',
    'https://pkmncards.com/wp-content/uploads/ledian-skyridge-sk-15.jpg',
    'https://pkmncards.com/wp-content/uploads/machamp-skyridge-sk-16.jpg',
    'https://pkmncards.com/wp-content/uploads/magcargo-skyridge-sk-17.jpg',
    'https://pkmncards.com/wp-content/uploads/magcargo-skyridge-sk-18.jpg',
    'https://pkmncards.com/wp-content/uploads/magneton-skyridge-sk-19.jpg',
    'https://pkmncards.com/wp-content/uploads/magneton-skyridge-sk-20.jpg',
    'https://pkmncards.com/wp-content/uploads/moltres-skyridge-sk-21.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoqueen-skyridge-sk-22.jpg',
    'https://pkmncards.com/wp-content/uploads/omastar-skyridge-sk-23.jpg',
    'https://pkmncards.com/wp-content/uploads/piloswine-skyridge-sk-24.jpg',
    'https://pkmncards.com/wp-content/uploads/politoed-skyridge-sk-25.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwrath-skyridge-sk-26.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-skyridge-sk-27.jpg',
    'https://pkmncards.com/wp-content/uploads/raikou-skyridge-sk-28.jpg',
    'https://pkmncards.com/wp-content/uploads/rhydon-skyridge-sk-29.jpg',
    'https://pkmncards.com/wp-content/uploads/starmie-skyridge-sk-30.jpg',
    'https://pkmncards.com/wp-content/uploads/steelix-skyridge-sk-31.jpg',
    'https://pkmncards.com/wp-content/uploads/umbreon-skyridge-sk-32.jpg',
    'https://pkmncards.com/wp-content/uploads/vaporeon-skyridge-sk-33.jpg',
    'https://pkmncards.com/wp-content/uploads/wigglytuff-skyridge-sk-34.jpg',
    'https://pkmncards.com/wp-content/uploads/xatu-skyridge-sk-35.jpg',
    

    ],

    //Uncommons at index 2
    ['https://pkmncards.com/wp-content/uploads/electrode-skyridge-sk-36.jpg',
    'https://pkmncards.com/wp-content/uploads/kabuto-skyridge-sk-37.jpg',
    'https://pkmncards.com/wp-content/uploads/machoke-skyridge-sk-38.jpg',
    'https://pkmncards.com/wp-content/uploads/misdreavus-skyridge-sk-39.jpg',
    'https://pkmncards.com/wp-content/uploads/noctowl-skyridge-sk-40.jpg',
    'https://pkmncards.com/wp-content/uploads/omanyte-skyridge-sk-41.jpg',
    'https://pkmncards.com/wp-content/uploads/persian-skyridge-sk-42.jpg',
    'https://pkmncards.com/wp-content/uploads/piloswine-skyridge-sk-43.jpg',
    'https://pkmncards.com/wp-content/uploads/starmie-skyridge-sk-44.jpg',
    'https://pkmncards.com/wp-content/uploads/wobbuffet-skyridge-sk-45.jpg',
    'https://pkmncards.com/wp-content/uploads/ancient-ruins-skyridge-sk-119.jpg',
    'https://pkmncards.com/wp-content/uploads/relic-hunter-skyridge-sk-120.jpg',
    'https://pkmncards.com/wp-content/uploads/apricorn-maker-skyridge-sk-121.jpg',
    'https://pkmncards.com/wp-content/uploads/crystal-shard-skyridge-sk-122.jpg',
    'https://pkmncards.com/wp-content/uploads/desert-shaman-skyridge-sk-123.jpg',
    'https://pkmncards.com/wp-content/uploads/fast-ball-skyridge-sk-124.jpg',
    'https://pkmncards.com/wp-content/uploads/fisherman-skyridge-sk-125.jpg',
    'https://pkmncards.com/wp-content/uploads/friend-ball-skyridge-sk-126.jpg',
    'https://pkmncards.com/wp-content/uploads/hyper-potion-skyridge-sk-127.jpg',
    'https://pkmncards.com/wp-content/uploads/lure-ball-skyridge-sk-128.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-alpha-skyridge-sk-129.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-beta-skyridge-sk-130.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-gamma-skyridge-sk-131.jpg',
    'https://pkmncards.com/wp-content/uploads/mirage-stadium-skyridge-sk-132.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-alpha-skyridge-sk-133.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-beta-skyridge-sk-134.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-gamma-skyridge-sk-135.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-delta-skyridge-sk-136.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-zone-skyridge-sk-137.jpg',
    'https://pkmncards.com/wp-content/uploads/oracle-skyridge-sk-138.jpg',
    'https://pkmncards.com/wp-content/uploads/star-piece-skyridge-sk-139.jpg',
    'https://pkmncards.com/wp-content/uploads/underground-expedition-skyridge-sk-140.jpg',
    'https://pkmncards.com/wp-content/uploads/underground-lake-skyridge-sk-141.jpg',
    'https://pkmncards.com/wp-content/uploads/bounce-energy-skyridge-sk-142.jpg',
    'https://pkmncards.com/wp-content/uploads/cyclone-energy-skyridge-sk-143.jpg',
    'https://pkmncards.com/wp-content/uploads/retro-energy-skyridge-sk-144.jpg'],

    //Commons at index 3
    ['https://pkmncards.com/wp-content/uploads/abra-skyridge-sk-46.jpg',
    'https://pkmncards.com/wp-content/uploads/buried-fossil-skyridge-sk-47.jpg',
    'https://pkmncards.com/wp-content/uploads/cleffa-skyridge-sk-48.jpg',
    'https://pkmncards.com/wp-content/uploads/delibird-skyridge-sk-49.jpg',
    'https://pkmncards.com/wp-content/uploads/diglett-skyridge-sk-50.jpg',
    'https://pkmncards.com/wp-content/uploads/ditto-skyridge-sk-51.jpg',
    'https://pkmncards.com/wp-content/uploads/dugtrio-skyridge-sk-52.jpg',
    'https://pkmncards.com/wp-content/uploads/dunsparce-skyridge-sk-53.jpg',
    'https://pkmncards.com/wp-content/uploads/eevee-skyridge-sk-54.jpg',
    'https://pkmncards.com/wp-content/uploads/farfetchd-skyridge-sk-55.jpg',
    'https://pkmncards.com/wp-content/uploads/forretress-skyridge-sk-56.jpg',
    'https://pkmncards.com/wp-content/uploads/gastly-skyridge-sk-57.jpg',
    'https://pkmncards.com/wp-content/uploads/girafarig-skyridge-sk-58.jpg',
    'https://pkmncards.com/wp-content/uploads/gligar-skyridge-sk-59.jpg',
    'https://pkmncards.com/wp-content/uploads/golbat-skyridge-sk-60.jpg',
    'https://pkmncards.com/wp-content/uploads/granbull-skyridge-sk-61.jpg',
    'https://pkmncards.com/wp-content/uploads/growlithe-skyridge-sk-62.jpg',
    'https://pkmncards.com/wp-content/uploads/haunter-skyridge-sk-63.jpg',
    'https://pkmncards.com/wp-content/uploads/heracross-skyridge-sk-64.jpg',
    'https://pkmncards.com/wp-content/uploads/hoothoot-skyridge-sk-65.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-skyridge-sk-66.jpg',
    'https://pkmncards.com/wp-content/uploads/igglybuff-skyridge-sk-67.jpg',
    'https://pkmncards.com/wp-content/uploads/jigglypuff-skyridge-sk-68.jpg',
    'https://pkmncards.com/wp-content/uploads/kadabra-skyridge-sk-69.jpg',
    'https://pkmncards.com/wp-content/uploads/kakuna-skyridge-sk-70.jpg',
    'https://pkmncards.com/wp-content/uploads/lapras-skyridge-sk-71.jpg',
    'https://pkmncards.com/wp-content/uploads/ledyba-skyridge-sk-72.jpg',
    'https://pkmncards.com/wp-content/uploads/ledyba-skyridge-sk-73.jpg',
    'https://pkmncards.com/wp-content/uploads/machop-skyridge-sk-74.jpg',
    'https://pkmncards.com/wp-content/uploads/magikarp-skyridge-sk-75.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-skyridge-sk-76.jpg',
    'https://pkmncards.com/wp-content/uploads/mantine-skyridge-sk-77.jpg',
    'https://pkmncards.com/wp-content/uploads/meowth-skyridge-sk-78.jpg',
    'https://pkmncards.com/wp-content/uploads/murkrow-skyridge-sk-79.jpg',
    'https://pkmncards.com/wp-content/uploads/natu-skyridge-sk-80.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-female-skyridge-sk-81.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-female-skyridge-sk-82.jpg',
    'https://pkmncards.com/wp-content/uploads/nidorina-skyridge-sk-83.jpg',
    'https://pkmncards.com/wp-content/uploads/pikachu-skyridge-sk-84.jpg',
    'https://pkmncards.com/wp-content/uploads/pineco-skyridge-sk-85.jpg',
    'https://pkmncards.com/wp-content/uploads/pineco-skyridge-sk-86.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwag-skyridge-sk-87.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwhirl-skyridge-sk-88.jpg',
    'https://pkmncards.com/wp-content/uploads/raticate-skyridge-sk-89.jpg',
    'https://pkmncards.com/wp-content/uploads/rattata-skyridge-sk-90.jpg',
    'https://pkmncards.com/wp-content/uploads/rhyhorn-skyridge-sk-91.jpg',
    'https://pkmncards.com/wp-content/uploads/sandshrew-skyridge-sk-92.jpg',
    'https://pkmncards.com/wp-content/uploads/sandslash-skyridge-sk-93.jpg',
    'https://pkmncards.com/wp-content/uploads/seel-skyridge-sk-94.jpg',
    'https://pkmncards.com/wp-content/uploads/seel-skyridge-sk-95.jpg',
    'https://pkmncards.com/wp-content/uploads/shuckle-skyridge-sk-96.jpg',
    'https://pkmncards.com/wp-content/uploads/skarmory-skyridge-sk-97.jpg',
    'https://pkmncards.com/wp-content/uploads/slugma-skyridge-sk-98.jpg',
    'https://pkmncards.com/wp-content/uploads/slugma-skyridge-sk-99.jpg',
    'https://pkmncards.com/wp-content/uploads/snorlax-skyridge-sk-100.jpg',
    'https://pkmncards.com/wp-content/uploads/snubbull-skyridge-sk-101.jpg',
    'https://pkmncards.com/wp-content/uploads/stantler-skyridge-sk-102.jpg',
    'https://pkmncards.com/wp-content/uploads/staryu-skyridge-sk-103.jpg',
    'https://pkmncards.com/wp-content/uploads/staryu-skyridge-sk-104.jpg',
    'https://pkmncards.com/wp-content/uploads/sunflora-skyridge-sk-105.jpg',
    'https://pkmncards.com/wp-content/uploads/sunkern-skyridge-sk-106.jpg',
    'https://pkmncards.com/wp-content/uploads/swinub-skyridge-sk-107.jpg',
    'https://pkmncards.com/wp-content/uploads/swinub-skyridge-sk-108.jpg',
    'https://pkmncards.com/wp-content/uploads/teddiursa-skyridge-sk-109.jpg',
    'https://pkmncards.com/wp-content/uploads/ursaring-skyridge-sk-110.jpg',
    'https://pkmncards.com/wp-content/uploads/venomoth-skyridge-sk-111.jpg',
    'https://pkmncards.com/wp-content/uploads/venomoth-skyridge-sk-112.jpg',
    'https://pkmncards.com/wp-content/uploads/voltorb-skyridge-sk-113.jpg',
    'https://pkmncards.com/wp-content/uploads/weedle-skyridge-sk-114.jpg',
    'https://pkmncards.com/wp-content/uploads/weedle-skyridge-sk-115.jpg',
    'https://pkmncards.com/wp-content/uploads/yanma-skyridge-sk-116.jpg',
    'https://pkmncards.com/wp-content/uploads/zubat-skyridge-sk-117.jpg',
    'https://pkmncards.com/wp-content/uploads/zubat-skyridge-sk-118.jpg']

]

// To add more sets 
/*
const links = [

    //Holofoil rares at index 0
    [

    ],

    //Rares at index 1

    [

    ],

    //Uncommons at index 2
    [

    ],

    //Commons at index 3
    [
        
    ],

] */