let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(my_leads) {
  let listItems = "";
  for (const leads of my_leads) {
    listItems += `
    <li>
      <a target="_blank" href="${leads}">
        ${leads}
      </a>
    </li>`;
  }

  ulEL.innerHTML = listItems;
}

/* localStorage.setItem("myLeads", "www.example.com");
localStorage.clear(); */
/* localStorage.clear(); */

/* myLeads.push("www.lead2.com");
myLeads = JSON.stringify(myLeads);

console.log(typeof myLeads); */
console.log(leadsFromLocalStorage);

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  inputEl.value = "";
  myLeads = [];
  render(myLeads);
});

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
// 2. Add the item to the listItems variable instead of the ulEl.innerHTML
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
