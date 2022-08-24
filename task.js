function go(playerChoice) {
  // define choices
  rps = ["rock", "paper", "scissors"];
  const getChoices = (playerChoice) => {
    // find the player's choice
    let findPlayerChoice = (playerChoice) => {
      if (playerChoice == "rock") {
        return 0;
      }
      if (playerChoice == "paper") {
        return 1;
      }
      if (playerChoice == "scissors") {
        return 2;
      }
    };
    // console.log(findPlayerChoice(playerChoice));

    // generate a choice by the computer; a random selection
    let computerChoice = Math.floor(Math.random() * rps.length);
    // console.log(computerChoice);
    compare(playerChoice, computerChoice);
  };
  // work out who won from either side, or a draw
  let compare = (findPlayerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (playerChoice === 0) {
      if (computerChoice === 1) {
        return "Computer wins :(";
      } else {
        return "You win!";
      }
    } else if (playerChoice === 1) {
      if (computerChoice === 2) {
        return "Computer wins :(";
      } else {
        return "You win!";
      }
    } else if (playerChoice === 2) {
      if (computerChoice === 0) {
        return "Computer wins :(";
      } else {
        return "You win!";
      }
    }
    return compare;
  };

  // optional: keep score
}

go("paper"); // or other options
