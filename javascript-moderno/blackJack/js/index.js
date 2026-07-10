let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sumEl = document.getElementById("sum");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let btnCard = document.getElementById("btn-newCard");
let playerEl = document.getElementById("player-el");
btnCard.style.display = "none";
let player = {
  name: "Alexsander",
  chips: 145,
};

// 1. Declare a variable called message and assign its value to an empty string"
// 2. Reassign the message variable to the string we're logging out

// 3. Log it out!

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard, secondCard);
  sum = cards[0] + cards[1];
  isAlive = true;
  playerEl.textContent = `${player.name}: ${player.chips}`;
  renderGame();
}

function renderGame() {
  btnCard.style.display = "block";
  cardsEl.textContent = "Cards: ";
  for (let card of cards) {
    cardsEl.textContent += `${card} `;
  }
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
  if (isAlive && hasBlackJack === false) {
    let newCard = getRandomCard();
    cardsEl.textContent += ` ${newCard}`;
    sum += newCard;
    cards.push(newCard);
    sumEl.innerHTML = sum;
    console.log(cards);

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
}
