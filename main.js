const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        
function createDeck() {
    var deck = new Array();

    for (let i = 0; i<suits.length; i++) {
        for (let j = 0; j<values.length; j++) {
            deck.push({Value: values[j], Suit: suits[i]});
        }
    }
            
    for (let i = 0; i<1000; i++) {
        let positionA = Math.floor(Math.random()*deck.length);
        let positionB = Math.floor(Math.random()*deck.length);
        let mid = deck[positionA];
                
        deck[positionA] = deck[positionB];
        deck[positionB] = deck[mid]; 
    }

    return deck;
}

function renderDeck(deck) {
    document.getElementById("deck").innerHTML = "";

	for(let i = 0; i < deck.length; i++) {
		let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
 }

 function load()
 {
     deck = createDeck();
     renderDeck(deck);
 }
 
 window.onload = load;
                 