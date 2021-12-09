import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import {pokemons} from '../mocks/pokemons.mocks'


describe('PokemonPage component', ()=>{

    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(PokemonPage)
    })

    test('debe de hacer match con el snapshot', ()=>{
     //   expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de llamar mixPokemonArray al montar', ()=>{
        
        const mixPokemonArrayArray = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        //Volvemos a montar el wrapper dado que cuando en el beforeEach lo montamos inicialmente, cuando se ejecuta el test,
        //Ya es demasiado tarde para hacer el spy
        const wrapper = shallowMount(PokemonPage)

        expect (mixPokemonArrayArray).toHaveBeenCalled

    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons', ()=>{
        // ejecutamos el "mount" cuando queremos que se ejecuten los procedimientos de los hijos (opciones e imagen)
        const wrapper = shallowMount(PokemonPage,{
            data() {
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        }) 

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions',()=>{
        
        const wrapper = shallowMount(PokemonPage,{
            data() {
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        }) 
    
        //PokemonPictures debe de existir
    
        expect( wrapper.find('pokemon-picture-stub').exists() ).toBeTruthy()
        
    
        //PokemonOptions debe de existir

        expect( wrapper.find('pokemon-options-stub').exists() ).toBeTruthy()
    
        //PokemonPicture attribute pokemonId === 1

        expect(wrapper.find('pokemon-picture-stub').attributes('pokemonid')).toBe("1")
    
        //PokemonOptions attribute pokemons toBe true

        expect(wrapper.find('pokemon-options-stub').attributes('pokemons')).toBeTruthy()

    })

    test('Pruebas con check answer',async()=>{

        const wrapper = shallowMount(PokemonPage,{
            data() {
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        }) 

        //Hemos de esperar a que se ejecture para obtener el resultado esperado
        await wrapper.vm.checkAnswer(1)

        expect(wrapper.find('h2').exists()).toBe(true)

        expect(wrapper.vm.showPokemon).toBe(true)

        expect(wrapper.find('h2').text()).toBe(`Correcto!! El pokemon era ${ pokemons[0].name }`)

        await wrapper.vm.checkAnswer(10)

        expect(wrapper.vm.message).toBe(`Ups!! No has acertado el pokemon... El pokemon era ${ pokemons[0].name }`)

    })

   

    
})