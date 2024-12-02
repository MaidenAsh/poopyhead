
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        
function createDeck() {
    let deck = []

    for (let i = 0; i<suits.length; i++) {
        for (let j = 0; j<values.length; j++) {
            deck.push({Value: values[j], Suit: suits[i]})
            }
    }
            
    for (let i = 0; i<1000; i++) {
        let positionA = Math.floor(Math.random()*deck.length)
        let positionB = Math.floor(Math.random()*deck.length)
        let mid = deck[positionA]
                
        deck[positionA] = deck[positionB]
        deck[positionB] = deck[mid] 
    }
    return deck
}

let test = createDeck()
console.log(test)