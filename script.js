// Get all the cards
const cards = document.querySelectorAll('.card');
let firstCard, secondCard;

function flipCard() {
  if (secondCard) return;
  
  this.classList.add('active');

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;

    if (firstCard.dataset.card === secondCard.dataset.card) {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      resetCards();
    } else {
      setTimeout(() => {
        firstCard.classList.remove('active');
        secondCard.classList.remove('active');
        resetCards();
      }, 1000);
    }
  }
}

function resetCards() {
  firstCard = null;
  secondCard = null;
}

// Shuffle the cards
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(Array.from(cards));
cards.forEach(card => card.addEventListener('click', flipCard));
