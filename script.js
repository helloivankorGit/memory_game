// Get all the cards
const cards = document.querySelectorAll('.card');

// Shuffle the cards
for (let i = 0; i < cards.length; i++) {
  let randomIndex = Math.floor(Math.random() * cards.length);
  cards[i].style.order = randomIndex;
}

let flippedCard = false;
let firstCard, secondCard;

// Add event listener to each card
cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
  // Check if two cards are already flipped
  if (flippedCard) {
    return;
  }

  this.classList.add('active');

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;

    // Check if the two flipped cards match
    if (firstCard.dataset.card === secondCard.dataset.card) {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      resetCards();
    } else {
      flippedCard = true;
      setTimeout(() => {
        firstCard.classList.remove('active');
        secondCard.classList.remove('active');
        resetCards();
      }, 1000);
    }
  }
}

function resetCards() {
  flippedCard = false;
  firstCard = null;
  secondCard = null;
}
