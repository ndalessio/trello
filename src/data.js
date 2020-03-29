import uuid from 'uuid/v4';

const columns = [
    {
        id: uuid(),
        title: 'Para hacer',
        cards: [
            {
                id: uuid(),
                title: 'Cuando estes aburridx',
                text: 'Leer algun librito',
                tags: [
                    {
                        name: 'easy',
                        color: 'color'
                    },
                    {
                        name: 'complicated',
                        color: 'yellow'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Cuando tengas hambre',
                text: 'prepara unos garbanzos al horno'
            }
        ]
    },
    {
        id: uuid(),
        title: 'En proceso',
        cards: [
            {
                id: uuid(),
                title: 'Estudio',
                text: 'ver videos de react y practicar'
            },
            {
                id: uuid(),
                title: 'Leer',
                text: 'Leyendo libro de Cortázar'
            }
        ]
    }
]

export default columns 