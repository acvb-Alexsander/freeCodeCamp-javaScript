let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
let listItems = [];

inputBtn.addEventListener("click", function () {
  console.log("Button clicked ");
  myLeads.push(inputEl.value);
});

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
// 2. Add the item to the listItems variable instead of the ulEl.innerHTML
// 3. Render the listItems inside the unordered list using ulEl.innerHTML

for (const leads of myLeads) {
  listItems += `<li>${leads}</li>`;

  /* const li = document.createElement("li");
    li.textContent = leads;
    ulEL.append(li); */
}

ulEL.innerHTML += listItems;
