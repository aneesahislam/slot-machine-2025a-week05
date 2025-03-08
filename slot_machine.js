let symbols1 = [':)', '<3', ':(', '$', '&']
var playerScore = 100;
document.querySelector("#playerScore").innerText = playerScore
let slot1 = symbols1[Math.floor(Math.random() * 5)]
let slot2 = symbols1[Math.floor(Math.random() * 5)]
let slot3 = symbols1[Math.floor(Math.random() * 5)]
document.querySelector("#slot1").innerText = slot1
document.querySelector("#slot2").innerText = slot2
document.querySelector("#slot3").innerText = slot3

function getRamdomCharacter() {
    let slot1 = symbols1[Math.floor(Math.random() * 5)]
    let slot2 = symbols1[Math.floor(Math.random() * 5)]
    let slot3 = symbols1[Math.floor(Math.random() * 5)]
    document.querySelector("#slot1").innerText = slot1
    document.querySelector("#slot2").innerText = slot2
    document.querySelector("#slot3").innerText = slot3

    if (slot1 == slot2 && slot2 == slot3) {
        document.querySelector("#results").innerText = 'JACKPOT! YOU WIN 100 POINTS'
        playerScore += 100

        if (playerScore >= 500) {
            document.querySelector("#results").innerText = 'CONGRATULATIONS! 500+ POINTS YOU WIN THE GAME'
        }
    }

    else {
        document.querySelector("#results").innerText = 'YOU lOSE 10 POINTS'
        playerScore -= 10
    }
    document.querySelector("#playerScore").innerText = playerScore
}

document.querySelector("#submit1").addEventListener("click", getRamdomCharacter);

function getRamdomCharacter2() {
    let slot1 = symbols1[Math.floor(Math.random() * 5)]
    let slot2 = symbols1[Math.floor(Math.random() * 5)]
    let slot3 = symbols1[Math.floor(Math.random() * 5)]
    document.querySelector("#slot1").innerText = slot1
    document.querySelector("#slot2").innerText = slot2
    document.querySelector("#slot3").innerText = slot3

    if (slot1 == slot2 && slot2 == slot3) {
        document.querySelector("#results").innerText = 'JACKPOT! YOU WIN 300 POINTS'
        playerScore += 300

        if (playerScore >= 500) {
            document.querySelector("#results").innerText = 'CONGRATULATIONS! 500+ POINTS YOU WIN THE GAME'
        }
    }

    else {
        document.querySelector("#results").innerText = 'YOU lOSE 50 POINTS'
        playerScore -= 50
    }
    document.querySelector("#playerScore").innerText = playerScore
}

document.querySelector("#submit2").addEventListener("click", getRamdomCharacter2);