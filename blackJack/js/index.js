const max = 11;
const min = 2;

let firstCard;
let secondCard;
let results;
let hasBlackJack = false;
let isAlive = false;
let cards = [];

let sum = document.getElementById("sum");
let startGame = document.getElementById("game");
let messageEl = document.getElementById("message-el");
let newCard = document.getElementById("nova-carta");
let cardsEl = document.getElementById("cardsEl");
let player = {
  name:"Per",
  chips:145
}
let playerEl = document.getElementById("player-el")=playerEl.textContent= player.name+ " : $" + player.chips

startGame.style.display = "none";
newCard.style.display = "none";

function getRandomCard() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderCards() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function blackJack() {
  if (results < 21) {
    messageEl.textContent = "Do you want to draw another card?";
  } else if (results === 21) {
    messageEl.textContent =
      "BlackJack! Ganhador, ganhador, galinha pro jantar!";
    hasBlackJack = true;
  } else {
    messageEl.textContent = "You're out of the game!";
    isAlive = false;
  }
}

function vitoria() {
  // Reinicia o jogo
  hasBlackJack = false;
  isAlive = true;

  firstCard = getRandomCard();
  secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  results = firstCard + secondCard;

  startGame.style.display = "flex";
  newCard.style.display = "flex";

  sum.textContent = results;

  renderCards();
  blackJack();

  console.log("Novo jogo iniciado");
  console.log(cards);
}

function anotherCard() {
  // Impede comprar carta após vitória ou derrota
  if (!isAlive || hasBlackJack) {
    return;
  }

  const newRandomCard = getRandomCard();

  cards.push(newRandomCard);
  results += newRandomCard;

  sum.textContent = results;

  renderCards();
  blackJack();

  console.log("Nova carta:", newRandomCard);
  console.log("Cartas:", cards);
  console.log("Soma:", results);
}
