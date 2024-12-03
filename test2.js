
        var suits = ["spades", "diamonds", "clubs", "hearts"];
        var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; 
        let gameRunning;
        let downcard1 =[]
        let downcard2 =[]
        let upcard1 =[]
        let upcard2 =[]
        let handcard1 =[]
        let handcard2 =[]
        let stack = []

        function initGame() {
            gameRunning = true;
            let deck = createDeck();
            deal(deck);
            draw(deck);
        }

        function createDeck() {
            let deck = []

            for (let i = 0; i<suits.length; i++) {
                for (let j = 0; j<values.length; j++) {
                    deck.push({Value: values[j], Suit: suits[i]})
                }
            }

            deck.push({Value: "Joker", Suit: "red"})
            deck.push({Value: "Joker", Suit: "black"})
            
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

        initGame();
