const cards = Array.from(document.querySelectorAll('.card'));
let flippedCard = false;
let firstCard, secondCard;
let matchedPairs = 0;

// Add event listener to each card
cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
  if (flippedCard || this === firstCard) return;

  this.classList.add('active');

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;

    if (firstCard.dataset.card === secondCard.dataset.card) {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      resetCards();

      if (++matchedPairs === cards.length / 2) {
        initRestartButton();
        showFinish();
      }
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
  firstCard = null;
  secondCard = null;
  flippedCard = false;
}

function showFinish() {
  document.getElementById('finish').classList.remove('hidden');
}

function initRestartButton() {
  const restartButton = document.getElementById('restart-button');
  restartButton.addEventListener('click', restartGame); // Add event listener
}

function restartGame() {
  cards.forEach(card => {
    card.classList.remove('active', 'matched');
  });
  resetCards();
  shuffleCards();
  hideFinish();
  matchedPairs = 0;
}

function hideFinish() {
  document.getElementById('finish').classList.add('hidden');
}

function shuffleCards() {
  cards.forEach(card => {
    const randomOrder = Math.floor(Math.random() * cards.length);
    card.style.order = randomOrder;
  });
}


shuffleCards(); // Initial shuffle
