console.log("Loading game....")

// Computer play
function computerPlay() {
    // Randomly return Rock, Paper, or Scissors
    let compChoices = ['rock', 'paper', 'scissors']

    // Choose a random number between 0 and the length of the choices array - 1
    let index = Math.floor(Math.random() * compChoices.length)
    return compChoices[index]
}
// Player play
function playerSelection() {
    // Prompt the player to select Rock, paper, or scissors
    let playerChoice = prompt("Rock, paper, or Scissors?")
    playerChoice = playerChoice.toLowerCase()
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        console.log(playerChoice)
        return playerChoice
    } else {
        playerSelection()
    }
}

function playRound() {
    // Play a single round of Rock, Paper, Scissors

    // Rock -> Scissors -> Paper -> Rock
    let comp = computerPlay()
    let player = playerSelection()
    let winner;
    // Player wins
    if (player === 'rock' && comp === 'scissors') {
        console.log("Player wins with Rock")
        winner = 'Player'
    } else if(player === 'scissors' && comp === 'paper' ){
        console.log("Player wins with Scissors")
        winner = 'Player'
    } else if(player === 'paper' && comp === 'rock') {
        console.log("Player wins with Paper")
        winner = 'Player'
    } 

    // Computer wins
    if (comp === 'rock' && player === 'scissors') {
        console.log("Computer wins with Rock")
        winner = "Computer"
    } else if(comp === 'scissors' && player === 'paper' ){
        console.log("Computer wins with Scissors")
        winner = "Computer"
    } else if(comp === 'paper' && player === 'rock') {
        console.log("Computer wins with Paper")
        winner = "Computer"
    } else if(player === comp) {
        console.log("Tie!")
        playRound()
    }

    return winner
}

function game(numRounds=5) {
    // Play 5 rounds of rock paper scissors that keeps score and returns the winner
    let compScore = 0
    let playerScore = 0
    for (let i=0;i < numRounds;i++) {
        let round = playRound()

        if(round === 'Player') {
            playerScore += 1
        } else if(round === 'Computer') {
            compScore += 1
        }

        if(compScore === 3 || playerScore === 3) {
            return compScore === 3 ? `Computer wins with ${compScore} points` : `Player wins with ${playerScore} points`
        }
    }
}

console.log(game())