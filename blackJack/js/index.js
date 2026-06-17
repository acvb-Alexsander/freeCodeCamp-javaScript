const max = 11;
const min = 2;
const firstCard = Math.floor(Math.random() * (max - min + 1)) + min;
const secondCard = Math.floor(Math.random() * (max - min + 1)) + min;
let results = firstCard + secondCard;
document.getElementById("card1").innerText = firstCard;
document.getElementById("card2").innerText = secondCard;

let hasBlackJack = false;
let isAlive = true;
let sum = document.getElementById("sum");
let startGame = document.getElementById("game");
let messageEl = document.getElementById("message-el");

startGame.style.display = "none";

sum.innerText = results;

function vitoria() {
  startGame.style.display = "flex";
  let buttonStart = document.getElementById("button-btn");

  messageEl.innerText = "Want another Card?";
  blackJack();
}

if (results < 21) {
  console.log("do you want to draw another card");
} else if (results === 21) {
  console.log("BLACKJACK");
  hasBlackJack = true;
} else {
  console.log("you're out of the game");
  isAlive = false;
}

function blackJack() {
  if (results == 21) {
    alert("BLACKJACK");
    document.getElementById("vitoria").innerText =
      "sum: PARABÉNS VOCÊ VENCEU A MESA DE BLACKJACK!!!! CONSEGUIU OS " +
      results;
  } else {
    alert("Derrota");
    document.getElementById("vitoria").innerText =
      "sum: Você conseguiu " + results + " o resultado dependera da mesa";
  }
}

function anotherCard() {}

console.log(hasBlackJack);
console.log(isAlive);
