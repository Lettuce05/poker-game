import React from 'react'
import './Card.css'

export default function Card({ alt, card }) {
    
    return (
        <img className="card" src={require(`../../assets/cards/alt${alt}/${card}.svg`)} alt={`${card} card`} />
    )
}
