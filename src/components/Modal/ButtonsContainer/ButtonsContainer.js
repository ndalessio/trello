import React from 'react'
import './ButtonsContainer.scss'
import Button from '../../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTags, faCheckSquare, faArrowRight, faCopy, faShareAlt } from '@fortawesome/free-solid-svg-icons'

const ButtonsContainer = () => (
    <div className='buttons-container'>
        <div className='button-title'>Añadir a la tarjeta</div>
        
        <Button icon={faUser} text='Miembros'></Button>
        <Button icon={faTags} text='Etiquetas'></Button>
        <Button icon={faCheckSquare} text='Checklist'></Button>   

        <div className='button-title'>Acciones</div>

        <Button icon={faArrowRight} text='Mover'></Button>
        <Button icon={faCopy} text='Copiar'></Button>
        <Button icon={faShareAlt} text='Compartir'></Button> 

    </div>
)

export default ButtonsContainer