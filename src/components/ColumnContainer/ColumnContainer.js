import React from 'react';
import uuid from 'uuid/v4';
import Column from '../Column/Column';
import './ColumnContainer.scss';
import columns from '../../data';

const ColumnContainer = () => (
    <div className='column-container'>
        {
            columns.map(column => 
                <Column 
                    key={uuid()}
                    title={column.title}
                    cards={column.cards} >  
                    </Column>)
        }
    </div>
)

export default ColumnContainer;