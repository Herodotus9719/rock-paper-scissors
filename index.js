let playerChoice;
let computerChoice;

function getComputerChoice() {
    randNum = Math.trunc(Math.random() * 10 / 4) + 1;
    if (randNum === 1) {
        return "rock";
    } else if (randNum === 2) {
        return "paper"
    } else {
        return "scissors";
    }
}

// console.log(computerChoice);


// console.log(playRound(prompt(), computerChoice));

const btnRock = document.querySelector('#rock-button');
btnRock.addEventListener("click", () => {
    playRound('rock')
});
const btnPaper = document.querySelector('#paper-button');
btnPaper.addEventListener("click", () => {
    playRound('paper')
});
const btnScissors = document.querySelector('#scissors-button');
btnScissors.addEventListener("click", () => {
    playRound('scissors')
});

const displayRes = document.querySelector('#display-results');

const displayScore = document.querySelector('#display-score');

const displayWinner = document.querySelector('#display-winner');



let scoreHumanity = 0;
let scoreMachine = 0;
let scoreDraw = 0;

function playRound(player) {
    if (scoreHumanity < 5 && scoreMachine < 5) {

        let computer = getComputerChoice();
        if (computer === "rock" && player === "rock") {
            displayRes.textContent = ("Rock draws with rock, machine has equaled man");
        } else if (computer === "rock" && player === "paper") {
            displayRes.textContent = ("Paper beats rock, humanity prevails");
        } else if (computer === "rock" && player === "scissors") {
            displayRes.textContent = ("Scissors beat rock, skynet wins");
        } else if (computer === "paper" && player === "rock") {
            displayRes.textContent = ("Paper beats rock, skynet wins");
        } else if (computer === "paper" && player === "paper") {
            displayRes.textContent = ("Paper ties with paper, machine has equaled man");
        } else if (computer === "paper" && player === "scissors") {
            displayRes.textContent = ("Scissors beat paper, humanity prevails");
        } else if (computer === "scissors" && player === "rock") {
            displayRes.textContent = ("Rock beats scissors, humanity prevails");
        } else if (computer === "scissors" && player === "paper") {
            displayRes.textContent = ("Scissors beat paper, skynet wins");
        } else if (computer === "scissors" && player === "scissors") {
            displayRes.textContent = ("Scissors tie with scissors, machine has equaled man");
        }
        // console.log(result);
        if (computer === "rock" && player === "rock") {
            scoreDraw += 1;
        } else if (computer === "rock" && player === "paper") {
            scoreHumanity += 1;
        } else if (computer === "rock" && player === "scissors") {
            scoreMachine += 1;
        } else if (computer === "paper" && player === "rock") {
            scoreMachine += 1;
        } else if (computer === "paper" && player === "paper") {
            scoreDraw += 1;
        } else if (computer === "paper" && player === "scissors") {
            scoreHumanity += 1;
        } else if (computer === "scissors" && player === "rock") {
            scoreHumanity += 1;
        } else if (computer === "scissors" && player === "paper") {
            scoreMachine += 1;
        } else if (computer === "scissors" && player === "scissors") {
            scoreDraw += 1;
        }
        displayScore.textContent = (`The score is ${scoreHumanity} : ${scoreMachine}`)
        if (scoreHumanity === 5) {
            displayWinner.textContent = ("Congratulations, you have won the game!");
        } else if (scoreMachine === 5) {
            displayWinner.textContent = ("Tough luck, the game is over and you have lost");
        };
    }
}


/*function theGame(player, computer) {
    if (computer === "Rock" && player === "Rock") {
        console.log("Machine has equaled man");
    } else if (computer === "Rock" && player === "Paper") {
        console.log("Humanity prevails");
    } else if (computer === "Rock" && player === "Scissors") {
        console.log("Skynet wins");
    } else if (computer === "Paper" && player === "Rock") {
        console.log("Skynet wins");
    } else if (computer === "Paper" && player === "Paper") {
        console.log("Machine has equaled man");
    } else if (computer === "Scissors" && player === "Rock") {
        console.log("Humanity prevails");
    } else if (computer === "Scissors" && player === "Paper") {
        console.log("Skynet wins");
    } else if (computer === "Scissors" && player === "Scissors") {
        console.log("Machine has equaled man");
    }
} */