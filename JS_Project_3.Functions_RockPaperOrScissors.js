const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else if (userInput === 'bomb') {
        console.log('win, no matter what');
    } else {
        console.log('error');
    }
}

//T5
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scrissors';
    }
};

//T7
function determineWinner(userChoice, computerChoice) {
    //tie condition
    if (userChoice === computerChoice) {
        return 'The game is a tie';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer won';
        } else {
            return 'player won';
        }

        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'computer won';
            } else {
                return 'player won';
            }
        }

        if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'computer won';
            } else {
                return 'player won';
            }
        }
    }
};

//T11
console.log(determineWinner())
console.log(determineWinner('scissors', 0));
// T6 calling 
console.log(getComputerChoice());
// T4 calling:valid and invalid input
// printing the results to the console.
console.log(getUserChoice('rock'));
console.log(getUserChoice('paper'));
console.log(getUserChoice('scissors'));
console.log(getUserChoice('V'));

//T12
const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('Player: ' + userChoice);
    console.log('Computer:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();

//T14
console.log(getUserChoice('bomb'));

/*
   if (userInput = 0) {
     return 'rock';
    } else if(userInput = 1) {
      return 'paper';
    } else if (userInput = 2) {
      return 'scissors'; 
    } else if  (userInput = 3) {
      return 'error';
    } else {
      return 'error';
    }
  }
*/

/*
  if (userChoice === computerChoice) {
    return 'The game is a tie';
  } if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'computer won';
  } if (userChoice === 'paper' && computerChoice === 'scissors' || 'rock') {
    return 'winner';
  } if (userChoice === 'scissors' && computerChoice === 'rock' || 'paper');
    return 'winner';
*/

/*
//T12
function playGame () {
  let userChoice = getUserChoice('rock', 'paper', 'scissors')
  let computerChoice = getComputerChoice()
  console.log()
}
  const determineWinner  = (userChoice, computerChoice);
  console.log(userChoice, computerChoice)
*/