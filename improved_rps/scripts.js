console.log("Loading game....")
let playerScore = 0
let computerScore = 0


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

function playRound(playerChoice) {
    // Play a single round of Rock, Paper, Scissors
    console.log("SCORE IN PLAYROUND", playerScore, computerScore)
    
    // Rock -> Scissors -> Paper -> Rock
    let comp = computerPlay()
    // let player = playerSelection()
    let player = playerChoice.toLowerCase()
    console.log("PLAYER CHOOSES: ", playerChoice, comp)
    let winner;
    // Player wins
    if (player === 'rock' && comp === 'scissors') {
        // console.log("Player wins with Rock")
        displayResult('Player', 'rock')
        winner = 'Player'
    } else if(player === 'scissors' && comp === 'paper' ){
        // console.log("Player wins with Scissors")
        displayResult('Player', 'scissors')
        winner = 'Player'
    } else if(player === 'paper' && comp === 'rock') {
        // console.log("Player wins with Paper")
        displayResult('Player', 'paper')
        winner = 'Player'
    } 

    // Computer wins
    if (comp === 'rock' && player === 'scissors') {
        // console.log("Computer wins with Rock")
        displayResult('Computer', 'rock')
        winner = "Computer"
    } else if(comp === 'scissors' && player === 'paper' ){
        // console.log("Computer wins with Scissors")
        displayResult('Computer', 'scissors')
        winner = "Computer"
    } else if(comp === 'paper' && player === 'rock') {
        // console.log("Computer wins with Paper")
        displayResult('Computer', 'paper')
        winner = "Computer"
    } else if(player === comp) {
        console.log("Tie!")
        let resultDisplay = document.querySelector('#results-display')
        resultDisplay.innerText = 'Tie!'
        // Need to get the user input from here 
        // playRound()
    }
    if (playerScore === 5) {
        displayWinner('Player')
    } else if (computerScore === 5) {
        displayWinner('Computer')
    }
    
    return winner
}

// function game(numRounds=5) {
    //Function not needed for this implementation
//     // Play 5 rounds of rock paper scissors that keeps score and returns the winner
//     let compScore = 0
//     let playerScore = 0
//     for (let i=0;i < numRounds;i++) {
//         let round = playRound()

//         if(round === 'Player') {
//             playerScore += 1
//         } else if(round === 'Computer') {
//             compScore += 1
//         }

//         if(compScore === 3 || playerScore === 3) {
//             return compScore === 3 ? `Computer wins with ${compScore} points` : `Player wins with ${playerScore} points`
//         }
//     }
// }

// When a player clicks a button, record the button then run a game round and display the result


// Add event listeners to the buttons
let game_buttons = document.querySelectorAll('button')

game_buttons.forEach((button) => {
    button.addEventListener('click', () => {

        // Each button click should initialize a game round
        let playerChoice = button.innerText;
        playRound(playerChoice)
        // console.log(playerChoice)

    })
})

function displayResult(player, choice) {
    // let game_container = document.querySelector('#game-container')
    console.log("PLayer: ", player)
    let resultDiv = document.querySelector('#results-display')
    let scoreDiv = document.querySelector('#score-display')
    let pscore = document.querySelector('#pscore')
    let cscore = document.querySelector('#cscore')

    resultDiv.innerText = '';
    resultDiv.innerText = `${player} wins with ${choice}`

    if (player === 'Player') {
        console.log("PLAYER WINS")
        playerScore += 1
        pscore.innerText = playerScore;
    } else if (player === 'Computer') {
        console.log("COMPUTER WINS")
        computerScore += 1
        cscore.innerText = computerScore;
    }
    
}

function displayWinner(winner) {
    let winnerDisplay = document.createElement('h1')
    let game_container = document.querySelector('#game-container')
    winnerDisplay.innerText = `${winner} wins!`
    game_container.appendChild(winnerDisplay)

}
