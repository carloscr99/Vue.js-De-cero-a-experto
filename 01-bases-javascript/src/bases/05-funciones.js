

const saludar = (nombre) => `Hola ${nombre}`

const nombre = 'Carlos'

console.log(saludar(nombre))

const getUser = () => {
    return {
        uid: 1234,
        username: 'CarlosC0'
    }
}

console.log(getUser())

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'SuperMan'
}
]

const existe = heroes.some((heroe) => heroe.id === 1)

console.log(existe)


const heroeEncontrado = heroes.find((heroe) => heroe.id === 1)

console.log(heroeEncontrado.name)

const {name} = heroes.find((heroe) => heroe.id === 1)

console.log(name)