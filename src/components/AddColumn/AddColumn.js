import React from 'react'
import Button, { BUTTON_SIZES, BUTTON_STYLES } from '../Button/Button'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './AddColumn.scss'

class AddColumn extends React.Component {
    state = {
        columnName: ''
    }
    addColumnName = event => {
        this.setState({ columnName: event.target.value })
        
    }
    render() {
       const { onAddColumn } = this.props
        return (
            <div className='add-column-container'>

                <input
                    type='text'
                    className='text-input'
                    placeholder='Añada el nombre de la lista'
                    value={this.state.columnName}
                    onChange={this.addColumnName}
                >
                </input>

                <div onClick={ () => onAddColumn(this.state.columnName)}>
                    <Button
                        text='Guardar'
                        type={BUTTON_STYLES.DEFAULT}
                        size={BUTTON_SIZES.SHRINK}
                        className='action-button'
                    />
                </div>
                {/* <Button
                    icon={faTimes}
                    type={BUTTON_SIZES.ICON}
                    
                /> */}
            </div>
        )
    }
}


export default AddColumn