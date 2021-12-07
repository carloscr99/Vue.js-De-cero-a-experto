import pokemonApi from "../api/pokemonApi"


export const getPokemons = () =>{

    const pokemonsArr = Array.from( Array(650) )

    return pokemonsArr.map(( x, index) => index + 1)

}

const getPokemonsOptions = async() =>{
    // El math.random es para desordenar el array aleatoriamente 
    const mixPokemons = getPokemons().sort( () => Math.random() - 0.5 ) 

    const pokemons = await getPokemonsNames(mixPokemons.splice(0,4))

    console.table(pokemons)

    return pokemons
    
}

//Como sabemos que recibimos 4 pokemons, desestructuramos el array con 4 variables para no tener que hacer x[0]...
export const getPokemonsNames = async([a,b,c,d] = []) =>{

    /*
   const resp = await pokemonApi.get(`/1`)

   console.log(resp.data.name)
   */
  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ]
    //Lanza las promesas de manera simultánea
   const [p1, p2, p3, p4] = await Promise.all( promiseArr )
   
   return [
       {name: p1.data.name, id: p1.data.id},
       {name: p2.data.name, id: p2.data.id},
       {name: p3.data.name, id: p3.data.id},
       {name: p4.data.name, id: p4.data.id},
   ]

}

export default getPokemonsOptions