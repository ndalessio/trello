import React from 'react';
import Tag, { TAG_TYPES } from '../Tag/Tag';
import data from '../../data';
import './Card.scss';

const Card = ({ title, text, tags}) => (
    <div className='card'>
        <div className='tags'>
            {
                // tags.map(tag => 
                // <Tag 
                //     key={tag.key} 
                //     type={TAG_TYPES.SMALL}
                //     color={tag.color}
                //     name={tag.name}

                // />)
            }
        </div>
        <div className='card-title'>{title}</div>
        <div className='card-text'>{text}</div>
    </div>
)

export default Card;