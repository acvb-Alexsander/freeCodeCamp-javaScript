function secureRandomInt(range) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return Math.floor((array[0] / 4294967296) * range);
}

let randomNumber = secureRandomInt(6) + 1;
let flooredNumber = rollDice();
console.log(flooredNumber);

function rollDice() {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  return diceRoll;
}
