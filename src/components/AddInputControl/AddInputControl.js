import React from 'react'
import Button, { BUTTON_SIZES, BUTTON_STYLES} from '../Button/Button'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './AddInputControl.scss'

const AddInputControl = () => (
    <div className='add-input-control'>
        <input
            type='text'
            className='text-input'
            placeholder='Añada otra lista'
        >
        </input>
        <div className='input-actions'>
            <Button 
                text='Añadir lista' 
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

export default AddInputControl