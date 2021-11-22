

const persona = {
    nombre: 'Toni',
    ape: 'Revert',
    edad: 45,
    direccio: {

        ciudad: 'Valencia',
        cp: 46022
    }
}
//Rompe la referencia del objeto del que se copia (...)
const persona2 = { ...persona };

persona2.nombre = 'Juan'


console.log(persona)
console.log(persona2)