const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error!');
  }
}

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'Tie';
  } else if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The Computer Won!';
    } else {
      return 'You Won!';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The Computer Won!';
    }else {
      return 'You Won!';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The Computer Won!';
    } else {
      return 'You Won!';
    }
  }
  if(userChoice === 'bomb') {
    return 'CheatCode Annitiated: YOU WIN!'
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You Threw: ' + userChoice);
  console.log('The Computer Threw: '+ computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
