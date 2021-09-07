import React from 'react'
import './cart.css'

export default function Cart({title, text}) {
    return (
        <div className="main">
            <h2>
                {title}</h2>
             <p>
                 {text}</p>
        </div>
    )
}
