

        //function test() {
           // ctx.drawImage(document.getElementById("spades2"), 200, 662, 80, 120);
           // ctx.drawImage(document.getElementById("redBack"), 240, 510, 80, 120);  
       // }
        
       var suits = ["spades", "diamonds", "clubs", "hearts"];
       var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; 
       let gameRunning;
       let downcard1 = [];
       let downcard2 = [];
       let upcard1 = [];
       let upcard2 = [];
       let handcard1 = [];
       let handcard2 = [];
       let selected = [];
       let stack = []; 
       let cw = 80;
       let ch = 120;
       let test1 = [1,2,3,4,5]
       console.log(test1.at(-1))
    

       function initGame() {
           gameRunning = true;
           let deck = createDeck();
           values.push("Joker")
           deal(deck);
           draw(deck);
           renderCards();
           
       }

       function gameLoop() {
           draw(deck);
           renderCards();
       }

       function createDeck() {
        let deck = []
        // Iterates through suits and values to create cards
        for (let i = 0; i<suits.length; i++) {
            for (let j = 0; j<values.length; j++) {
                deck.push({Value: values[j], Suit: suits[i], Magical: false, x1: 0, x2: 0, y1: 0, y2: 0, Selected: false})
            }
        }
        // Defines magical cards
        for (let i = 0; i<deck.length; i++) {
            switch(deck[i].Value) {
                case "2":
                case "7":
                case "8":
                case "10":
                    deck[i].Magical = true
                    break;
            }
        }
        // Adds jokers
        deck.push({Value: "Joker", Suit: "red", Magical: true, x1: 0, x2: 0, y1: 0, y2: 0, Selected: false})
        deck.push({Value: "Joker", Suit: "black", Magical: true, x1: 0, x2: 0, y1: 0, y2: 0, Selected: false})
        // Shuffles       
        for (let i = 0; i<1000; i++) {
            let positionA = Math.floor(Math.random()*deck.length)
            let positionB = Math.floor(Math.random()*deck.length)
            let mid = deck[positionA]
                    
            deck[positionA] = deck[positionB]
            deck[positionB] = mid
        }
        return deck
    }
       function deal(deck) {
           while (downcard1.length<3) {
               downcard1.push(deck.pop())
           }
           while (downcard2.length<3) {
               downcard2.push(deck.pop())
           }
           while (upcard1.length<3) {
               upcard1.push(deck.pop())
           }   
           while (upcard2.length<3) {
               upcard2.push(deck.pop())
           }
       }

       function draw(deck) {
           if (deck.length == 0) {
               return
           }
           while (handcard1.length<3) {
               handcard1.push(deck.pop())
           }
           while (handcard2.length<3) {
               handcard2.push(deck.pop())
           }
       }

       function formString(card) {
           let string = ''
               return string += card.Suit + card.Value
       }
               
       function renderCards() {
           for (let i = 0; i<downcard1.length; i++) {
               let x = i*120 + 240
               //ctx.drawImage(document.getElementById("redBack"), x, 510, 80, 120)
           }     
               
           for (let i = 0; i<downcard2.length; i++) {
               let x = i*120 + 240
               //ctx.drawImage(document.getElementById("blueBack"), x, 170, 80, 120)
           }    
           
           for (let i = 0; i<upcard1.length; i++) {
               let s = formString(upcard1[i])
               let x = i*120 + 240
               //ctx.drawImage(document.getElementById(s), x, 510, 80, 120)
           }    

           for (let i = 0; i<upcard2.length; i++) {
               let s = formString(upcard2[i])
               let x = i*120 + 240
               //ctx.drawImage(document.getElementById(s), x, 170, 80, 120)
           } 

           for (let i = 0; i<handcard1.length; i++) {
               let s = formString(handcard1[i])
               let gap = ((400-(80*handcard1.length))/(handcard1.length + 1))
               let interval = 80 + gap
               let initial = 200 + gap
               let x = i*interval + initial
               //ctx.drawImage(document.getElementById(s), x, 680, 80, 120)
           } 

           for (let i = 0; i<handcard2.length; i++) { 
               let gap = ((400-(80*handcard2.length))/(handcard2.length + 1))
               let interval = 80 + gap
               let initial = 200 + gap
               let x = i*interval + initial
               //ctx.drawImage(document.getElementById(blueBack), x, 0, 80, 120)
           } 

       }          
       initGame()