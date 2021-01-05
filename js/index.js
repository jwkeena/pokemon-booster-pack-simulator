// Global variables. Card and set info is isolated in other js files already loaded on index.html
// -----------------------
// UI - row view
function displayOpenedPack(packArt, pack) {
    console.log(pack);
    const packWrapper = document.createElement("div");
    packWrapper.classList.add("open-pack");
    document.getElementById("opened-packs").prepend(packWrapper);
    
    const randomPackArtStringFront = packArt[randomIndex(packArt.length)].front;
    const packArtFront = buildCardHTML(["pack-art", "pulled-card"], randomPackArtStringFront);  
    packWrapper.appendChild(packArtFront);

    // Creates elements like this: <div class="pulled-card" style="background-image: url(https://images.pokemontcg.io/base2/64.png)"></div>
    // For some unfathomable reason I can't create img tags, or the flexbox overflow-y breaks. Must use div tags
    for (let i = 0; i < pack.length; i++) {
        const card = buildCardHTML(["pulled-card"], pack[i].imageUrl)
        packWrapper.appendChild(card);
        card.addEventListener("dblclick", e => {zoomCard(pack[i].imageUrlHiRes)})    
    }
    // Event delegation for horizontal scrolling from https://stackoverflow.com/questions/11700927/horizontal-scrolling-with-mouse-wheel-in-a-div
    packWrapper.addEventListener("wheel", e => {
        const toLeft  = e.deltaY < 0 && packWrapper.scrollLeft > 0
        const toRight = e.deltaY > 0 && packWrapper.scrollLeft < packWrapper.scrollWidth - packWrapper.clientWidth
      
        if (toLeft || toRight) {
          e.preventDefault()
          packWrapper.scrollLeft += e.deltaY
        }
    })
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

// Flip through stack of cards modified from https://codepen.io/mix3d/pen/bEaxEW?editors=0010
$.fn.commentCards = function(){

    return this.each(function(){
  
      var $this = $(this),
          $cards = $this.find('.card'),
          $current = $cards.filter('.card--current'),
          $next;
  
      $cards.on('click',function(){
        if ( !$current.is(this) ) {
          $cards.removeClass('card--current card--out card--next');
          $current.addClass('card--out');
          $current = $(this).addClass('card--current');
          $next = $current.next();
          $next = $next.length ? $next : $cards.first();
          $next.addClass('card--next');
        }
      });
  
      if ( !$current.length ) {
        $current = $cards.last();
        $cards.first().trigger('click');
      }
  
      $this.addClass('cards--active');
  
    })
  
  };
  
  $('.cards').commentCards();

// -----------------------
// Event listeners
const buttonOpenPack = document.querySelector(".button-open-pack");
buttonOpenPack.addEventListener("click", () => openPack(sets.fossil));

const modal = document.getElementById("card-zoom");
const closeModalButton = document.getElementsByClassName("close")[0];
closeModalButton.onclick = function() {
    modal.style.display = "none";
}
