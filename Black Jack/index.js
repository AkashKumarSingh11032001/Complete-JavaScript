let firstCard = math.R
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById('message-el')
let sumEL = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

function start() {
    renderstart()
}

function renderstart() {

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
    sumEL.textContent = "Sum : " + sum
    // cardsEl.textContent = "Card :" + cards[0] + " " + cards[1]
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard() {

    let card = 7
    cards.push(card)
    renderstart()
}

