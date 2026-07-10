let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function getHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

console.log(getHand());

let player1 = getHand();
let player2 = getHand();

if (player1 === hands[0] && player2 === hands[2]) {
  console.log(
    `player one chooses ${player1} and player two choses ${player2}: player 1 wins`,
  );
} else if (player1 === hands[1] && player2 === hands[0]) {
  console.log(
    `player one chooses ${player1} and player two chooses ${player2}: player 1 wins`,
  );
} else if (player1 === hands[2] && player2 === hands[1]) {
  console.log(
    `player one chooses ${player1} and player two chooses ${player2}: player 1 wins`,
  );
} else {
  console.log(
    `player one chooses ${player1} and player two chooses ${player2}: player 2 wins`,
  );
}
