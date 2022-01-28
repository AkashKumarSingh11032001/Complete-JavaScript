
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById('message-el')
let sumEL = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')

let player = {
    name : "Akash",
    chip : 145 
}
playerEl.textContent = player.name + ": $" + player.chip

function start() {
    isAlive = true
    let firstCard = randomNumber()
    let secondCard = randomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderstart()
}

function randomNumber() {
    let x = Math.floor(Math.random() * 13) + 1
    if(x === 1){
        return 11
    }else if(x > 10 ){
        return 10
    }
    else{
        return x
    }
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
    cardsEl.textContent = "Card :"
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard() {

    if(isAlive == true && hasBlackJack == false){
    let card = randomNumber()
    sum += card
    cards.push(card)
    renderstart()

    }
    
}

