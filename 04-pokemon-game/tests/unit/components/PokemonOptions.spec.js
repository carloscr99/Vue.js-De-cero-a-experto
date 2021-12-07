import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions"

import {pokemons} from "../mocks/pokemons.mocks.js"

describe("Pokemon options Component", () =>{

    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(PokemonOptions, {
            props:{
                pokemons
            }
        })
    })


    test('debe de hacer match con el snapshot', ()=>{


     //   console.log(wrapper.html())

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('debe de mostrar las 4 opciones correctamente', ()=>{

        //Que existan 4 li
        const liTags = wrapper.findAll('li')

        expect(liTags.length).toBe(4)
        
        //cada li debe tener el nombre del pokemon

        expect(liTags[0]).toBe('bulbasaur')
        


    })

    test('debe de emitir "seleccion" con  sus respectivos parámetros al hacer click', ()=>{

    })

})