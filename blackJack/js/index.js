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
sum.innerText = results;

function vitoria() {
  if (results == 21) {
    alert("BLACKJACK");
    document.getElementById("vitoria").innerText =
      "PARABÉNS VOCÊ VENCEU A MESA DE BLACKJACK!!!! CONSEGUIU OS " + results;
  } else {
    alert("Derrota");
    document.getElementById("derrota").innerText =
      "Você conseguiu " + results + " o resultado dependera da mesa";
  }
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

console.log(hasBlackJack);
console.log(isAlive);
