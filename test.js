// shortened version of next option but doesn't work
    //newId.innerHTML = "<a href = 'javascript:displayCollectedCard(" + newCardOrderGameBoy[0] + ");'>" + cutElement + "</a>";
// makes a link but the link won't function 
    // newId.innerHTML = "<a href = 'javascript:void();' onclick = 'displayCollectedCard(" + newCardOrderGameBoy[0] + ");'>" + cutElement + "</a>";
// creates button but won't function 
    // newId.innerHTML = "<button onclick = 'displayCollectedCard(" + newCardOrderGameBoy[0] + ");'>" + cutElement + "</button>";
// test card 'colosseum/A07 Charmeleon.png'


//Third attempt
e1 = document.getElementById(newRareString)
if (e1.className === "") {
    e1.src = "redcheck.png";
    e1.className = "fake"
    ++newCardsFound;
    increaseCardCount();
}

e2 = document.getElementById(newUncommonString1)
if (e2.className === "") {
    e2.src = "redcheck.png";
    e2.className = "fake"

    increaseCardCount();
}

e3 = document.getElementById(newUncommonString2)
if (e3.className === "") {
    e3.src = "redcheck.png";
    e3.className = "fake"

    increaseCardCount();
}


e4 = document.getElementById(newUncommonString3)
if (e4.className === "") {
    e4.src = "redcheck.png";
    e4.className = "fake"

    increaseCardCount();
}


//Second attempt
    newCardsFound = 0;

                        cardCount = cardCount - newCardsFound;
                    document.getElementById("cardCount").innerHTML = cardCount + "/229";

    if (rareElement.src != "redcheck.png"){
        ++newCardsFound;
        increaseCardCount();
        rareElement.src = "redcheck.png";
        rareElement.id = "checked";
    }

        rareElement = document.getElementById(newRareString)
    if (rareElement.src != "redcheck.png"){
        ++newCardsFound;
        increaseCardCount();
        rareElement.src = "redcheck.png";
        rareElement.id = "checked";
    }

    uncommonElement1 = document.getElementById(newUncommonString1)
    if (uncommonElement1.src != "redcheck.png"){
        ++newCardsFound;
        increaseCardCount();
        uncommonElement1.src = "redcheck.png";
        uncommonElement1.id = "checked";
    }

    uncommonElement2 = document.getElementById(newUncommonString2)
    if (uncommonElement2.src != "redcheck.png"){
        ++newCardsFound;
        increaseCardCount();
        uncommonElement2.src = "redcheck.png";
        uncommonElement2.id = "checked";
    }

    uncommonElement3 = document.getElementById(newUncommonString3)
    if (uncommonElement3.src != "redcheck.png"){
        ++newCardsFound;
        increaseCardCount();
        uncommonElement3.src = "redcheck.png";
        uncommonElement3.id = "checked";
    }

    
commonElement1 = document.getElementById(newCommonString1)
    if (commonElement1.src != "redcheck.png"){
        ++newCardsFound;
        increaseCardCount();
        commonElement1.src = "redcheck.png";
        commonElement1.id = "checked";
    }

    commonElement2 = document.getElementById(newCommonString2)
    if (commonElement2.src != "redcheck.png"){
        ++newCardsFound;
        increaseCardCount();
        commonElement2.src = "redcheck.png";
        commonElement2.id = "checked";
    }

    commonElement3 = document.getElementById(newCommonString3)
    if (commonElement3.src != "redcheck.png"){
        ++newCardsFound;
        increaseCardCount();
        commonElement3.src = "redcheck.png";
        commonElement3.id = "checked";
    }

    commonElement4 = document.getElementById(newCommonString4)
    if (commonElement4.src != "redcheck.png"){
        ++newCardsFound;
        increaseCardCount();
        commonElement4.src = "redcheck.png";
        commonElement4.id = "checked";
    }

    commonElement5 = document.getElementById(newCommonString5)
    if (commonElement5.src != "redcheck.png"){
        ++newCardsFound;
        increaseCardCount();
        commonElement5.src = "redcheck.png";
        commonElement5.id = "checked";
    }

        energyElement = document.getElementById(newEnergyString)
    if (energyElement.src != "redcheck.png"){
        increaseCardCount();
        energyElement.src = "redcheck.png";
        energyElement.id = "checked";
    }

//first attempt


    if (document.getElementById(newRareString).src === "redcheck.png"){
        return;
    } else {
        ++newCardsFound;
        increaseCardCount();
        document.getElementById(newRareString).src = "redcheck.png";
    }

    if (document.getElementById(newUncommonString1).src === "redcheck.png"){
        return;
    } else {
        ++newCardsFound;
        increaseCardCount();
        document.getElementById(newUncommonString1).src = "redcheck.png";
    }

    if (document.getElementById(newUncommonString1).src === "redcheck.png"){
        return;
    } else {
        ++newCardsFound;
        increaseCardCount();
        document.getElementById(newUncommonString2).src = "redcheck.png";
    }

    if (document.getElementById(newUncommonString3).src === "redcheck.png"){
        return;
    } else {
        ++newCardsFound;
        increaseCardCount();
        document.getElementById(newUncommonString3).src = "redcheck.png";
    }

    if (document.getElementById(newCommonString1).src === "redcheck.png"){
        return;
    } else {
        ++newCardsFound;
        increaseCardCount();
        document.getElementById(newCommonString1).src = "redcheck.png";
    }

    if (document.getElementById(newCommonString2).src === "redcheck.png"){
        return;
    } else {
        ++newCardsFound;
        increaseCardCount();
        document.getElementById(newCommonString2).src = "redcheck.png";
    }

    if (document.getElementById(newCommonString3).src === "redcheck.png"){
        return;
    } else {
        ++newCardsFound;
        increaseCardCount();
        document.getElementById(newCommonString3).src = "redcheck.png";
    }

    if (document.getElementById(newCommonString4).src === "redcheck.png"){
        return;
    } else {
        ++newCardsFound;
        increaseCardCount();
        document.getElementById(newCommonString4).src = "redcheck.png";
    }

    if (document.getElementById(newCommonString5).src === "redcheck.png"){
        return;
    } else {
        ++newCardsFound;
        increaseCardCount();
        document.getElementById(newCommonString5).src = "redcheck.png";
    }

    if (document.getElementById(newEnergyString).src === "redcheck.png"){
        return;
    } else {
        document.getElementById(newCommonString1).src = "redcheck.png";
        increaseCardCount();
    }