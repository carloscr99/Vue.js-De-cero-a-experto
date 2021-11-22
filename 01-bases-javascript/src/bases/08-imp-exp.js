//Importaciones - exportaciones

import { owners } from './../data/heroes' 

import superHeroes from './../data/heroes'

const [ dc, marvel] = owners

// console.log(dc, marvel)

// console.log(superHeroes)

//getHeroById(id)
//funcion de flecha
// usar find de arreglos

/*
const getHeroById = (id) => {

    return superHeroes.find(hero => hero.id === id) 
    
}

*/

export const getHeroById = (id) => superHeroes.find(hero => hero.id === id) 
    
// console.log(getHeroById(2))

/*
const getHeroesByOwner = (owner) =>{

    return [

        superHeroes.filter(heroes => heroes.owner === owner)

    ]

}

*/

//getHeroesByOwner 'DC', 'Marvel'
export const getHeroesByOwner = (owner) => superHeroes.filter(heroes => heroes.owner === owner)


// console.log(getHeroesByOwner('DC'))


/*
Prueba de importación de las funciones desde otro fichero (index.js)

import { getHeroById , getHeroesByOwner } from './bases/08-imp-exp' 


console.log(getHeroById(2))


console.log(getHeroesByOwner('DC'))





*/