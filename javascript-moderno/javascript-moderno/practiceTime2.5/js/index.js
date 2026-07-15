const container = document.getElementById("container");

container.innerHTML = `<button>Buy</button> `;

container.addEventListener("click", function () {
  container.innerHTML += "<p>Thank you for buying!</p>";
});
