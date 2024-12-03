
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        
function createDeck() {
    let deck = []

    for (let i = 0; i<suits.length; i++) {
        for (let j = 0; j<values.length; j++) {
            deck.push({Value: values[j], Suit: suits[i]});
        }
    }

    deck.push({Value: "Joker", Suit: "red"})
    deck.push({Value: "Joker", Suit: "black"})
            
    for (let x = 0; x<1000; x++) {
        let positionA = Math.floor(Math.random()*deck.length)
        let positionB = Math.floor(Math.random()*deck.length)
        let mid = deck[positionA]
                
        deck[positionA] = deck[positionB]
        deck[positionB] = mid 
    }
    return deck
}

let test = createDeck()
console.log(test)