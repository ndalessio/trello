import React from 'react';
import './Card.scss';

const Card = props => (
    <div className='card'>
        <div className='card-title'>{props.title}</div>
        <div className='card-text'>{props.text}</div>
    </div>
)

export default Card;