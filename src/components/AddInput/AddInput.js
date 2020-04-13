import React from 'react'
import Button, { BUTTON_SIZES, BUTTON_STYLES} from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './AddInput.scss'

const AddInput = ({ placeholder }) => (
    <div className='add-input'>
        <div className='input-container'>
            <input type='text' placeholder={placeholder}></input>
        </div>

        <div className='input-actions'>
            <Button 
                text='Guardar' 
                type={BUTTON_STYLES.DEFAULT}
                size={BUTTON_SIZES.SHRINK} 
                className='action-button'
            />
            <Button
                icon={faTimes}
                type={BUTTON_SIZES.ICON}
                className='action-button'
            />
            
        </div> 
    </div>
)

export default AddInput