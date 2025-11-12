import { useState } from "react"
import './styles/Letter.css'

function Letter(props) {

    let className = 'letter';
    if (props.pressed) {
        className += ' active';
    }
    
    return (
        <span className={className}>
            {props.letter}
        </span>
    )
} 

export default Letter