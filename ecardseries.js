// Feel free to use and repurpose my code, as long as you credit me and/or link to my github page
// Written by justin keena, https://github.com/jwkeena/Pokemon-Booster-Pack-Simulator

function redirect() {
    window.location.href = "mailto:jwkeena@gmail.com";
}

//Sets variables for the flip all button to only affect unflipped cards
let cardIsFlipped0 = 0;
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
function flip0() {
    let element = document.getElementById('myDiv');
    if (cardIsFlipped0 === 0) {
        element.classList.toggle("flipped");
        ++cardIsFlipped0;
    } else {
        element.classList.toggle("flipped");
        cardIsFlipped0 = 1;
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
    if (cardIsFlipped0 === 0) {
        flip0();
        }
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

function reset0() {
    const element = document.getElementById('myDiv');
    element.classList.remove("flipped");
    cardIsFlipped0 = 0;
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
    // reset0();
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
    var randomSet = 1 //Make 1-3 when adding next sets
    switch(randomSet) {
        case 1:
        newPackExpeditionBase();
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
    document.getElementById("rarity0").src = "expedition-base-set-pokemon-set-symbol.png";
    
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
        document.getElementById("boosterPackFront").src="expeditionbase1.jpg";
        document.getElementById("boosterPackBack").src="expeditionbaseback.jpg";
    }
    if (packArt2 === 2) {
        document.getElementById("boosterPackFront").src="expeditionbase2.jpg";
        document.getElementById("boosterPackBack").src="expeditionbaseback.jpg";
    }
    if (packArt2 === 3) {
        document.getElementById("boosterPackFront").src="expeditionbase3.jpg";
        document.getElementById("boosterPackBack").src="expeditionbaseback.jpg";
    }
    if (packArt2 === 4) {
        document.getElementById("boosterPackFront").src="expeditionbase4.jpg";
        document.getElementById("boosterPackBack").src="expeditionbaseback.jpg";
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


// To add more sets 
/*
const links = [

    //Rares at index 0
    [

    ],

    //Uncommons at index 1
    [

    ],

    //Commons at index 2
    [
        
    ],

] */