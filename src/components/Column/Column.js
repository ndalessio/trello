import React from 'react';
import Card from '../Card/Card';
import AddCard from '../AddCard/AddCard';
import Button, { BUTTON_SIZES, BUTTON_STYLES} from '../Button/Button';
import './Column.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Column = props => (
    <div className='column'>
        <div className='column-title'>{props.title}</div>
        {
            props.cards.map(card =>
                <Card
                    key={card.id}
                    title={card.title}
                    text={card.text}
                />)
        }
        <AddCard text={' Añada otra tarjeta'} icon={faPlus}></AddCard>
        <Button text={'Añadir'}></Button>
    </div>
)

export default Column;