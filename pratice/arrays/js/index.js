let sentence = ["hello", "my", "name", "is", "Per"];
let greetingEl = document.getElementById("greeting-el");

for (let word of sentence) {
  greetingEl.textContent += word + " ";
  console.log(greetingEl);
}
