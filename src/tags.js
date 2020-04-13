import uuid from 'uuid/v4';

const tags = [
    {
        id: uuid(),
        name: 'Urgente',
        color: 'red'
    },
    {
        id: uuid(),
        name: 'Importante',
        color: 'darkorange'
    },
    {
        id: uuid(),
        name: 'Fácil',
        color: 'green'
    }
]

export default tags