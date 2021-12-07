//getPokemonsOptions va fuera de las llaves dado que es la importación por defecto
import getPokemonsOptions, {getPokemons, getPokemonsNames} from '@/helpers/getPokemonOptions'


describe("getPokemonOptions helpers", ()=>{

    test("debe de regresar un arreglo de pokemons ", () =>{

        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)

    })

    test('debe de retornar un arreglo de 4 elementos con los nombres de sus pokemon', async ()=>{

        const [p1, p2, p3, p4] = await getPokemonsNames([1,2,3,4])

        expect(p1.name).toBe('bulbasaur')
        expect(p2.name).toBe('ivysaur')
        expect(p3.name).toBe('venusaur')
        expect(p4.name).toBe('charmander')

    })

    test('getPokemonOptions debe de retornar un arreglo mezclado', async()=>{

        const pokemons = await getPokemonsOptions()

        console.log(pokemons)

        expect(pokemons.length).toBe(4)
        //Como devuelve un array con datos aleatorios, hemos de comprobar que al menos son del tipo esperado
        expect( pokemons ).toEqual([
            [
                { 
                    name: expect.any(String),
                    id:  expect.any(Number),
                 },
                { 
                    name: expect.any(String),
                    id:  expect.any(Number),
                 },
                { 
                    name: expect.any(String),
                    id: expect.any(Number),
                 },
                { 
                    name: expect.any(String),
                    id:  expect.any(Number),
                }
              ]
        ])

        
    })

})