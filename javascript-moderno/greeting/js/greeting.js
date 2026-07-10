let sentence = ["Hello ", "my ", "name ", "is ", "Per"];
let greetingEl = document.getElementById("greeting-el");

for (const greeting of sentence) {
  greetingEl.textContent += greeting;
}
