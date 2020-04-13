import React from 'react'
import './Modal.scss'
import ButtonsContainer from './ButtonsContainer/ButtonsContainer'
import TittleWithIcon from './TittleWithIcon/TittleWithIcon'
import AddInput from '../AddInput/AddInput'
import Button, { BUTTON_SIZES, BUTTON_TYPES } from '../Button/Button'
import { faWindowMaximize, faAlignLeft, faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = () => (
    <div className='modal'>
        <div className='modal-header'>
            <TittleWithIcon icon={faWindowMaximize} text='Título' />
            <Button
                icon={faTimes}
                type={BUTTON_SIZES.ICON}
                className='close-button'
            />
        </div>
        <div className='modal-body'>
            <div className='modal-body-left'>
                <TittleWithIcon icon={faAlignLeft} text='Descripción' />
                <AddInput placeholder='Escriba una descripción'></AddInput>

                <TittleWithIcon icon={faAlignLeft} text='Actividad' />
                <AddInput placeholder='Agregue un comentario'></AddInput>
            </div>
    
            <ButtonsContainer />
        </div>
    </div>
)

export default Modal