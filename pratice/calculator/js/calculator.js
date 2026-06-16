let num1 = 8;
let num2 = 2;
let sum = document.getElementById("sum-el");

document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerHTML = num2;

function add() {
  let result = num1 + num2;
  sum.innerHTML = "Sum: " + result;
}

function sub() {
  let result = num1 - num2;
  sum.innerHTML = "Sum: " + result;
}

function divide() {
  let result = num1 / num2;
  sum.innerHTML = "Sum: " + result;
}

function multi() {
  let result = num1 * num2;
  sum.innerHTML = "Sum: " + result;
}
