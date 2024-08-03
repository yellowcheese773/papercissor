console.log("Moin moin")

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let min = 1
    let max = 3

    let randomNum = Math.floor(Math.random() * (max)) + 1;

    if (randomNum == 1) {
        return "rock"
    }
    else if (randomNum == 2) {
        return "paper"
    }
    else return "scissor"

}

function getHumanChoice() {
    let answer = prompt("paper, scissor or rock")

    return answer
}

function playRound() {

    let humanChoice = getHumanChoice()

    let humanAnswer = humanChoice.toLowerCase()

    let computerChoice = getComputerChoice()

    //ich muss noch einbauen, das wenn beide dasselbe ergebnis haben, das keiner einen punkt bekommt

    if (humanAnswer == "scissor" && computerChoice == "paper") {
        humanScore += 1
        console.log("human has won")

    }

    else if (humanAnswer == "rock" && computerChoice == "scissor") {
        humanScore += 1
        console.log("human has won")

    }

    else if (humanAnswer == "paper" && computerChoice == "rock") {
        humanScore += 1
        console.log("human has won")

    }

    else {
        computerScore += 1
        console.log("computer has won")
    }

    console.log("computer had: " + computerChoice)

    console.log("human had: " + humanAnswer)

    console.log("human: " + humanScore)
    console.log("computer: " + computerScore)


}

function playGame() {

    while (computerScore != 5 || humanScore != 5) {

        if (computerScore == 5) {
            alert("Computer has won")
            return
        }

        else if (humanScore == 5) {
            alert("human has won")
            return
        }

        playRound()
    }

}