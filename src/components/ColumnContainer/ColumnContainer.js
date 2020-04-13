import React from 'react';
import ColumnList from '../Lists/ColumnList/ColumnList'
import AddColumn from '../AddColumn/AddColumn';
import uuid from 'uuid/v4'
import './ColumnContainer.scss';


class ColumnContainer extends React.Component {
    state = {
        columns: []
    }

    addColumn = (columnName) => {
        const newColumn = {
            id: uuid(),
            title: columnName,
            cards: []
        }
        const nuevoArray = this.state.columns.slice()
        nuevoArray.push(newColumn)
        this.setState({ columnName: '', columns: nuevoArray })

    }

    render() {
        return (
            <div className='column-container'>
                <div className='columns'>
                    <ColumnList columns={this.state.columns} />
                    <AddColumn onAddColumn={this.addColumn} />
                </div>
            </div>
        )
    }
}


// 
export default ColumnContainer;


// const ColumnContainer = () => (
    //     <div className='column-container'>
    //         {
    //             columns.map(column => 
    //                 <Column 
    //                     key={column.id}
    //                     title={column.title}
    //                     cards={column.cards} >  
    //                     </>)
    //         }
    //     </div>
    // )