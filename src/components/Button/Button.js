import React from 'react'
import './Button.css'

function Button({text, color}) {
    return (
        <button className={`btn btn-${color}`}>{text}</button>
    )
}

export default Button
