let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

let fastestRacer = getFastestRaceTime();

console.log(fastestRacer);

function totalRaceTimes() {
  let totalTime = player1Time + player2Time;
  return totalTime;
}

let totalTimes = totalRaceTimes();

console.log(
  `the fastest time at the race was ${fastestRacer} and the total seconds run by the pilots was ${totalTimes}`,
);
