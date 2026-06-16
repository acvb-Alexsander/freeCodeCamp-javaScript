let count = 0;
let countEl = document.getElementById("count-el");
let messagesCount = 0;
let nome = "alexsander";
let greetings = "greetings Traveler ";
let myGreating = greetings + nome;
let preview = document.getElementById("preview");

function onClick() {
  console.log("the button was clicked");
  count++;
  countEl.innerText = count;
}

function save() {
  let countStr = count + " - ";
  console.log(count);
  preview.innerHTML += countStr;
  count = 0;
}

/* function alerts() {
  messagesCount = count / 2;
  alert(`You have ${messagesCount} new messages`);
} */
