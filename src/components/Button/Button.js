import React from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const BUTTON_STYLES = {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    LIGHT: 'light'
}

export const BUTTON_SIZES = {
    SHRINK: 'shrink',
    EXPAND: 'expand',
    ICON: 'icon'
}

const Button = ({ text, icon, type = BUTTON_STYLES.DEFAULT, size = BUTTON_SIZES.SHRINK, className = '' }) => (
    <div className={`button ${className} ${type} ${size}`}>

        {
            icon &&
            <FontAwesomeIcon
                icon={icon}
                className='button-icon'

            />
        }
        {text}

    </div>
)

export default Button