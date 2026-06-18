const max = 11;
const min = 2;
const firstCard = Math.floor(Math.random() * (max - min + 1)) + min;
const secondCard = Math.floor(Math.random() * (max - min + 1)) + min;
let results = firstCard + secondCard;
document.getElementById("card1").innerText = firstCard;
document.getElementById("card2").innerText = secondCard;
let oneMoreCard = false;
let hasBlackJack = false;
let isAlive = true;
let sum = document.getElementById("sum");
let startGame = document.getElementById("game");
let messageEl = document.getElementById("message-el");
let newCard = document.getElementById("nova-carta");

startGame.style.display = "none";
newCard.style.display = "none";
sum.innerText = results;

function vitoria() {
  startGame.style.display = "flex";
  newCard.style.display = "flex";
  let buttonStart = document.getElementById("button-btn");

  messageEl.innerText = "Want another Card?";
  blackJack();
}

function blackJack() {
  if (results < 21) {
    messageEl.textContent = "do you want to draw another card?";
  } else if (results === 21) {
    messageEl.textContent = "BlackJack ganhador, ganhador, galinha pro jantar";
    hasBlackJack = true;
  } else {
    messageEl.textContent = "you're out of the game";
    isAlive = false;
  }
}

function anotherCard() {
  let oneMoreCard = true;
  const thirdCard = Math.floor(Math.random() * (max - min + 1)) + min;
  results += thirdCard;
  sum.innerText = results;
  console.log(results);

  blackJack();
}

console.log(hasBlackJack);
console.log(isAlive);
