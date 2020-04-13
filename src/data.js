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
                        id: uuid(),
                        name: 'easy',
                        color: 'green'
                    },
                    {
                        id: uuid(),
                        name: 'complicated',
                        color: 'yellow'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Cuando tengas hambre',
                text: 'prepara unos garbanzos al horno',
                tags: []
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
                text: 'ver videos de react y practicar',
                tags: []
            },
            {
                id: uuid(),
                title: 'Leer',
                text: 'Leyendo libro de Cortázar',
                tags: []
            }
        ]
    }
]

export default columns 