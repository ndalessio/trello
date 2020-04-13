import React from 'react'
import Column from '../../Column/Column'

const ColumnList = ({columns}) => (
    columns.map(column => <Column 
        key={column.id}
        title={column.title}
        cards={column.cards}
    />)
)

export default ColumnList