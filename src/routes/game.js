import React, { useState } from 'react'
import Deck from '../Utils/Deck'
import Button from '../components/Button/Button'
import { Link } from 'react-router-dom'
import '../components/Game/Game.css'

export default function Game() {
    let [hand, setHand] = useState([]);
    let [round, setRound] = useState(0);
    let [deck, setDeck] = useState(new Deck());
    deck.shuffleDeck();
    
    return (
        <main>
            <nav className="game-nav">
                <Link className="btn btn-orange" to="/settings">Settings</Link>
                <Link className="btn btn-orange" to="/">Home</Link>
            </nav>
            {/* navigation */}
            {/* current hand */}
            {/* buttons */}
        </main>
    )
}


