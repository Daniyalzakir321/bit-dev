import React from 'react'
import './search.css'
import magnifierwhite from './magnifier-white.svg'

export default function SearchInput({ value, onChange }) {
    return (
        <div className="Header__Search">
            <form className="Header__Search_Outlined" autoComplete="off">
                <input type="text" value={value} onChange={onChange}
                    className="Header__Search_Outlined" placeholder="Search..." />
            </form>
            <div className="Header__MagnifierSearch">
                <img src={magnifierwhite} alt="" className="MagnifierImage" />
            </div>
        </div>
    )
}
