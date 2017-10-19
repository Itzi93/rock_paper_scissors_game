// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.
var humanScore = 0;
var computerScore = 0;

// Create a function play. It should accept two parameters: humanPlay and computerPlay
  function play(humanPlay, computerPlay){
    // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
    console.log('You played ' + humanPlay + '.' + 'The bot played ' + computerPlay + ' to the console.');
    // If the human play is equal to the computer play
      // Log "You tied. :|" to the console.
    if (humanPlay === computerPlay){
      console.log("You tied. :|");
    // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
    // humanPlay is 'rock' and the computerPlay is 'scissors' OR
    // humanPlay is 'scissors' and the computerPlay is 'paper'
      // Log "You win! :)" to the console
      // Add one to the humanScore variable (be sure to use += )
    }else if(humanPlay === 'paper' && computerPlay === 'rock' ||
            humanPlay === 'rock' && computerPlay === 'scissors' ||
            humanPlay === 'scissors' && computerPlay === 'paper'){
      console.log("You win! :)");
      humanScore += 1;
    // Otherwise log "You lose! :(" to the console
      // Add one to the computerScore variable (be sure to use += )
    }else {
      console.log("You lose! :()");
      computerScore += 1;
    }
  // Log "You have {humanScore} points" to the console
    console.log('You have ' + humanScore + ' points');
  // Log "The bot has {computerScore} points" to the console.
    console.log('You have ' + computerScore + ' points');
  }

// Calling the function

play("rock", "scissors");
play("rock", "paper");
play("scissors","paper");
play("paper", "rock");
play("paper","scissors");
play("scissors", "rock");
