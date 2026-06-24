/* let person = {
  name: "Alexsander",
  age: 28,
  country: "Brazil",
};

function logData() {
  return `${person.name} is ${person.age} old and lives in ${person.country}`;
}

console.log(logData());
 */

let age = 5;

/* function passengerDiscount() {
  if (age < 6) {
    return "It's free";
  } else if (age >= 6 && age <= 17) {
    return "child disconut";
  } else if (age >= 18 && age <= 26) {
    return "student discount";
  } else if (age >= 27 && age <= 66) {
    return "full price";
  } else {
    return "senior citizen discount";
  }
}

console.log(passengerDiscount()); */

/* let largeCountries = ["china", "india", "usa", "indonesia", "pakistao"];

console.log("The 5 Largest countries in the world:");

for (let i = 0; i < largeCountries.length; i++) {
  console.log("-" + largeCountries[i]);
}
 */

console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));
