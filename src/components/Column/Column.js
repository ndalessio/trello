import React from 'react';

import Card from '../Card/Card';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './Column.scss';

const Column = props => (
    <div className='column'>
        <div className='column-title'>{props.title}</div>
        { props.cards.map(card => 
            <Card 
                key={card.id}
                title={card.title} 
                text={card.text}
                />) 
        }
        <Input text={' + Añada otra tarjeta'}></Input>
        <Button text={'Añadir'}></Button>
    </div>
)

export default Column;