


const persona = {
    name: 'Batman',
    age: 12,
    code: 5584,
    poder: 'pera'
}

// Si no tiene poder (undefined), se asiga el valor
const {name, age, code, poder = 'No tiene' } = persona


console.log(name)
console.log(age)
console.log(code)
console.log(poder)

/*
const createHero = (person) => {

    const { name, age, code, poder } = person;

    return {
        id: 123,
        name,
        age,
        code,
        poder,
    }
}
*/

//Podemos desestructurar el objeto persona 
const createHero = ( { name, age, code, poder }) => ({
        id: 123,
        name,
        age,
        code,
        poder,
    })


console.log(createHero(persona))
