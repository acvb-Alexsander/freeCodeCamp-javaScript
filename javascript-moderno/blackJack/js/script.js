// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

/* let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age<=21) {
    console.log(`Your ${age} years old, You can not enter this club!`);
} else{
    console.log(`You may come in`);
    
}
 */

// Check if the person is elegible for a birthday card from the King! (100)

/* let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if( age === 100){
    console.log("Here is your birthday card from the King!");
} else if(age <100){
    console.log("Not elegible");   
} else{
    console.log("Not elegible, you have already gotten one");
    
}
 */

let featuredPosts = [
  "Check out my Netflix clone",
  "Here's the code for my project",
  "I've just relaunched my portfolio",
];

let expirience = [
  "Desenvolvedor frontEnd Angular",
  "Universidade Católica de Brasília-UCB",
  "Angular",
  "React",
  "Typescript",
];

let description = ["Alexsander Campos Vilas Boas", 28, true];

/* console.log(expirience[1]);
console.log(expirience[3]);
console.log(expirience[2]);
console.log(expirience[4]);
console.log(expirience[0]);
 */
/* console.log(expirience.length); */

/* let cards = [7, 4];

cards.push(6);

console.log(cards);
 */

/* let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
];

let newMessage = "Same here";

messages.push(newMessage); */

/* console.log(messages); */

/* newMessage = "How's your portfolio going ? ";

messages.push(newMessage); */

/* console.log(messages); */

/* messages.pop(); */

/* console.log(messages); */

/* for (const message of messages) {
  console.log(message);
} */

let player1Time = 102;
let player2Time = 107;

function getFastestTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return "tie";
  }
}

function totalRaceTime() {
  let sum = player1Time + player2Time;
  return sum;
}

let fastestRace = getFastestTime();
let totalTime = totalRaceTime();
console.log(fastestRace);
console.log(totalTime);
