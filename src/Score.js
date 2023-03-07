//import App from './App';
import React from 'react';

export default function ShowScore(props) {
    return (
        <div className='header'>
            <div className='title'>Can you get all 20?</div>
            <div className = 'scores'>Score: {props.counter}</div>
            <div className = 'scores'>High Score: {props.finalScore}</div>
        </div>
    )
}