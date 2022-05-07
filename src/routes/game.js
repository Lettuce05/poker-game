import React, { useState, useEffect } from 'react'
import Deck from '../Utils/Deck'
import Button from '../components/Button/Button'
import { Link } from 'react-router-dom'
import Card from '../components/Card/Card'
import '../components/Game/Game.css'

export default function Game() {
    let [hand, setHand] = useState([]);
    let [round, setRound] = useState(0);
    let [deck, setDeck] = useState(new Deck());

    useEffect(() => {
        // shuffle deck
        deck.shuffleDeck();
        // draw first hand
        setHand(deck.drawCards(5));
    }, []);
    
    return (
        <main>
            {/* navigation */}
            <nav className="game-nav">
                <Link className="btn btn-orange" to="/settings">Settings</Link>
                <Link className="btn btn-orange" to="/">Home</Link>
            </nav>

            {/* current hand */}
            <section style={{padding: "1rem"}}>
                {hand.map((card)=>{
                    return <Card alt="1" card={card.suit + card.value} key={card.suit + card.value}/>
                })}
            </section>
            {/* buttons */}
            <section></section>
        </main>
    )
}


