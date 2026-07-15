let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");
function getRandomIndex() {
  let randomIndex = Math.floor(Math.random() * fighters.length);
  return randomIndex;
}

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

  stageEl.textContent = `${fighters[getRandomIndex()]} vs ${fighters[getRandomIndex()]}`;
});

console.log(fighters.length);
