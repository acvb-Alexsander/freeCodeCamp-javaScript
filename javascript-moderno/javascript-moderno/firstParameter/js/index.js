const welcomeEl = document.getElementById("welcome-el");

function greetUser(name) {
  welcomeEl.textContent = `Welcome back, ${name}`;
}

greetUser("Alexsander");
