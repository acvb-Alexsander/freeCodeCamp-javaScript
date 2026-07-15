let countEl = document.getElementById("count-el");
let messageEl = document.getElementById("message-el");
let count =0;

function increment(){
    count++;
    countEl.innerText = count;
}

function save(){
    console.log(count);
    messageEl.textContent += `${count}-`;
    countEl.innerText = 0;
    count =0;
}