let score=0;
let scoreEl= document.getElementById("score-el");

function twoPointer(){
    score +=2;
    scoreEl.textContent= score
}

function threePointer(){
    score +=3;
    scoreEl.textContent= score
}