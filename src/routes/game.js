import React from 'react'
import Deck from '../Utils/Deck'
export default function Game() {
    let deck1 = new Deck();
    deck1.shuffleDeck();
    let cards = deck1.drawCards(5);
    console.log("cards drawn: ", cards);
    console.log("deck: ", deck1.cards);
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Game</h2>
        </main>
    )
}


