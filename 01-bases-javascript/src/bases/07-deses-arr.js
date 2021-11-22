
const characters = ['Goku', 'Batman', 'SuperMan']

const personaje = characters[0]

console.log(personaje)

//Esto es para desestructurar el array anterior
const [ p1, p2, p3 ] = characters

console.log(p1, p2, p3)

// Si queremos saltarnos personajes, ponemos tantas comas como personajes que queermos saltar
const [ , , personaje3 ] = characters

console.log( personaje3)


const returnArray = () => {

    return ['ABC', 123]
}

const  [letras, numeros] = returnArray()

console.log(letras, numeros)



const returnArraySendByParameters = ([letters, numbers]) => {

    return [letters, numbers]
}

const  [letras2, numeros2] = returnArraySendByParameters(['XYZ', 123])

console.log(letras2, numeros2)