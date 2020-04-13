import React from 'react'
import './TittleWithIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TittleWithIcon = ({ icon, text }) => (
    <div className='tittle-icon'>
        {
            icon &&
            <FontAwesomeIcon
                icon={icon}
                className='icon'
            />
        }
        {text}
    </div>
)

export default TittleWithIcon