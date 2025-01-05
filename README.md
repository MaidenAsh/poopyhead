# Shed
A card game made with html, css and javascript, based off the game Shed, also known as China Hand, Ten-Two Slide, Karma, Palace, or Shithead. 

The objective of the game is to lose all your cards as quickly as possible. The last player with cards remaining is the loser.

At the start of the game, each player is dealt 3 cards face down (downcards), 3 cards face up (upcards, laid on top of the downcards), and 3 cards for their hand (handcards). Before the rounds begin, each player has the opportunity to swap upcards with handcards to create a stronger set of upcards for later in the game.

The eldest player starts, and the turns go clockwise. Each player places a card from their handcards on their turn in the middle (the Stack), and replace those cards by drawing from the deck so that they always have at least 3 handcards. A player must play a card with a value equal to or higher than the card in the Stack. 

If a player fails to play a valid card, they add all the cards in the Stack to their hand, and it becomes the next player's turn.

For example, player 1 places down a 3 of clubs. Player 2 must place down a card with a value of 3 or higher. Cards are valued from 2 to A. Players can play multiple cards if those cards have the same value.

If 4 cards of the same value are next to each other in the Stack, then the Stack is burned. When the Stack is burned, the cards in the Stack are removed from play.

Whenever the Stack is burned by any means, the player that burned the Stack plays again.

Once the deck is exhausted, players no longer have to replace handcards that they play. A player can only use their upcards once they've exhausted their handcards, and can only use their downcards once they are out of upcards.

Some cards are magical and have special features. Magical cards can be placed on any card, except for Jokers. 

2s are magical. They have no special feature aside from that, but since they are magical and the lowest value card, they provide a way to 'reset' the Stack.

7s are magical. When they are played, the next card(s) played must be of a value below 7, or magical.

8s are magical. They are considered to be invisible/transparent, and the next card(s) played are compared to the card beneath the 8(s).

10s are magical. They burn the Stack. 

Jokers are magical. They act like an 8, but additionally they prevent magical cards from being placed on top of them, except for other Jokers.

Credits:
- This article was helpful in getting this project started: https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript 
- Card images: https://opengameart.org/content/cards-set
- Speaker off icon: https://commons.wikimedia.org/wiki/File:Speaker-off_-_Delapouite_-_game-icons.svg
- Speaker on icon: https://commons.wikimedia.org/wiki/File:Speaker_-_Delapouite_-_game-icons.svg
- Background Music: https://pixabay.com/music/smooth-jazz-jazz-funk-groove-instrumental-222618/
- Placing Card SFX: https://pixabay.com/sound-effects/flipcard-91468/
- Burn SFX: https://pixabay.com/sound-effects/electronic-element-burn-spark-1-248606/
- Forfeit SFX: https://pixabay.com/sound-effects/brass-fail-11-a-207140/
- Victory SFX: https://pixabay.com/sound-effects/level-win-6416/
- Defeat SFX: https://pixabay.com/sound-effects/game-over-39-199830/
