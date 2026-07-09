let firstCard = 10;
let secondCard = 7;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sumEl = document.getElementById("sum");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let btnCard = document.getElementById("btn-newCard");
btnCard.style.display = "none";
// 1. Declare a variable called message and assign its value to an empty string"
// 2. Reassign the message variable to the string we're logging out

// 3. Log it out!

function startGame() {
  renderGame();
}

function renderGame() {
  btnCard.style.display = "block";
  cardsEl.textContent = `Cards: ${cards[0]} + ${cards[1]}`;
  sumEl.innerText = sum;

  if (sum <= 20) {
    message = `You have ${sum}, Do you want to draw a new card? 🙂`;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";

    hasBlackJack = true;
  } else {
    message = `You drew ${sum}, You're out of the game! 😭`;

    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let newCard = 4;
  cardsEl.textContent += ` + ${newCard}`;
  sum += newCard;
  sumEl.innerHTML = sum;

  if (sum <= 20) {
    message = `You have ${sum}, Do you want to draw a new card? 🙂`;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";

    hasBlackJack = true;
  } else {
    message = `You drew ${sum}, You're out of the game! 😭`;

    isAlive = false;
  }
  messageEl.textContent = message;
}
