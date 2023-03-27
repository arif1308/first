let cards = [] //dynamic array
let sum = 0
let hasBlackJack = false //boolean value
let isAlive = false
let message= ""


let messageEl = document.getElementById("message-el") //object method
//console.log(messageEl)

let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

let player = {  //pops objects
    name : "Per" , //contains key: value pairs
    chips : 145

}

let playerEl = document.getElementById("player-el") //get element id from
playerEl.textcontent = player.name + ": $" + player.chips //object "."

function getRandomCard(){ //random card using math

    let randomnumber = Math.floor(Math.random()*13) +1
    if(randomNumber > 10){
        return 10
    }

    else if(randomNumber === 1){ //"===" comparison operator

        return 11

    }

    else{
        return randomNumber
    }

}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard,secondCard]
    let sum = [firstCard+secondCard]

    renderGame() //function list calling 2nd function
}



function renderGame(){ //funcion2
    cardEl.textContent = "Cards: "

    for(let i = 0;i< cards.length ; i++){
        cardEl.textContent = cards[i]+" "
    }


    sumEl.textContent = "sum: "+ sum


    if(sum <= 20){
        console.log("do you want new caed")//console print the messge

    }

    else if(sum == 21){
        message = "wohoo! you're got blackjacj"
        hasBlackJack = true

    }
    else{
        message = "you're out of game"
        isAlive = false
    }

    messageEl.textContent = message //



}

function newCard(){
    if(isAlive === true && hasBlackJack === false){ // is a logical operator

        let card = getRandomCard()

        sum += card

        cards.push(card)

        console.log(cards)

        renderGame()
        
    }
}
