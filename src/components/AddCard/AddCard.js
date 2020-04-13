import React from 'react';
import './AddCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddCard = ({text, icon}) => (
    <div className='add-card'>
        <FontAwesomeIcon icon={icon}/>
        {text}
    </div>
)

export default AddCard