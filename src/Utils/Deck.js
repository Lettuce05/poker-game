/*
* Deck: Deck class which contains a cards member and various functionality for *       interacting with the deck.
* Members:
*    cards
* Functions:
*    getFullDeck()
*    getRandomCard()
*    drawRandomCards()
*    shuffleDeck()
*    drawCards()
*/
export default function Deck() {
    this.cards = fullDeck();
}

/*
* getFullDeck: replenishes the cards member with a new unshuffled full deck
* params: none
* return type: none
*/
Deck.prototype.getFullDeck = function() {
    this.cards = fullDeck();
}

/*
* getRandomCard: returns a random card (taking it out of the cards array)
* params: none
* return type: card { suit, value }
*/
Deck.prototype.getRandomCard = function() {
    // get a random number
    let randomNumber = Math.floor(Math.random()*Date.now()) % this.cards.length;
    // get the card randomly chosen
    let card = this.cards[randomNumber];
    // remove the card from the deck
    this.cards.splice(randomNumber, 1);

    return card;
}

/*
* drawRandomCards: returns an array of random cards (taking it out of the cards *                  array)
* params: n (number of cards to draw)
* return type: array of cards [{ suit , value }]
*/
Deck.prototype.drawRandomCards = function(n) {
    let randomCards = [];
    // make sure requested number is not greater than length of cards array
    if(n <= this.cards.length){
        for(let i = 0; i < n; i++){
            // get a random card from the array of cards and add it to randomCards array
            randomCards.push(this.getRandomCard());
        }
        return randomCards;
    } else {
        // cannot draw more cards than there is in deck
        return -1;
    }
}

/*
* shuffleDeck: randomizes the order of the array
* params: none
* return type: none
*/
Deck.prototype.shuffleDeck = function(){
    // swap the position of every card in the deck
    for(let i = 0; i < this.cards.length; i++){
        // get random number
        let randomNumber = Math.floor(Math.random()*Date.now());
        // get index
        let randomIndex = i + (randomNumber % (this.cards.length - i));

        // swap cards
        let tempCard = this.cards[i];
        this.cards[i] = this.cards[randomIndex];
        this.cards[randomIndex] = tempCard;
    }
}

/*
* drawCards: returns the number of cards specified from the top of the deck 
*            (end of the cards array)
* params: n (number of cards to draw)
* return type: array of cards [{ suit , value }]
*/
Deck.prototype.drawCards = function (n) {
    let topCards = [];
    if(n <= this.cards.length){
        for(let i = 0; i < n; i++){
            topCards.push(this.cards.pop());
        }
        return topCards;
    } else {
        return -1;
    }
}

/*
* fullDeck: returns an array containing a full deck of cards (excluding jokers)
* params: none
* return type: array of cards
*/
function fullDeck() {
    return [
     {suit: "H", value: "A"}, 
     {suit: "H", value: "2"},
     {suit: "H", value: "3"},
     {suit: "H", value: "4"},
     {suit: "H", value: "5"},
     {suit: "H", value: "6"},
     {suit: "H", value: "7"},
     {suit: "H", value: "8"},
     {suit: "H", value: "9"},
     {suit: "H", value: "10"},
     {suit: "H", value: "J"},
     {suit: "H", value: "Q"},
     {suit: "H", value: "K"},
     {suit: "D", value: "A"}, 
     {suit: "D", value: "2"},
     {suit: "D", value: "3"},
     {suit: "D", value: "4"},
     {suit: "D", value: "5"},
     {suit: "D", value: "6"},
     {suit: "D", value: "7"},
     {suit: "D", value: "8"},
     {suit: "D", value: "9"},
     {suit: "D", value: "10"},
     {suit: "D", value: "J"},
     {suit: "D", value: "Q"},
     {suit: "D", value: "K"},
     {suit: "C", value: "A"}, 
     {suit: "C", value: "2"},
     {suit: "C", value: "3"},
     {suit: "C", value: "4"},
     {suit: "C", value: "5"},
     {suit: "C", value: "6"},
     {suit: "C", value: "7"},
     {suit: "C", value: "8"},
     {suit: "C", value: "9"},
     {suit: "C", value: "10"},
     {suit: "C", value: "J"},
     {suit: "C", value: "Q"},
     {suit: "C", value: "K"},
     {suit: "S", value: "A"}, 
     {suit: "S", value: "2"},
     {suit: "S", value: "3"},
     {suit: "S", value: "4"},
     {suit: "S", value: "5"},
     {suit: "S", value: "6"},
     {suit: "S", value: "7"},
     {suit: "S", value: "8"},
     {suit: "S", value: "9"},
     {suit: "S", value: "10"},
     {suit: "S", value: "J"},
     {suit: "S", value: "Q"},
     {suit: "S", value: "K"},
    ];
}