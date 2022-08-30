function go(playerChoice) {
  // define choices
  rps = ["rock", "paper", "scissors"];

  // generate a choice by the computer; a random selection
  let computerChoice = rps[Math.floor(Math.random() * rps.length)];
  console.log(`Computer choice: ${computerChoice}`);

  // work out who won from either side, or a draw
  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Computer wins :(");
    } else {
      console.log("You win!");
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("Computer wins :(");
    } else {
      console.log("You win!");
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("Computer wins :(");
    } else {
      console.log("You win!");
    }
  }
}

go("rock");
