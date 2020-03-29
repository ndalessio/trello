import React from 'react';
import Column from '../Column/Column';
import './ColumnContainer.scss';
import columns from '../../data';

const ColumnContainer = () => (
    <div className='column-container'>
        {
            columns.map(column => 
                <Column 
                    key={column.id}
                    title={column.title}
                    cards={column.cards} >  
                    </Column>)
        }
    </div>
)

export default ColumnContainer;