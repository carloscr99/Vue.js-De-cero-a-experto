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

        expect(liTags[0].text()).toBe('bulbasaur')
        


    })

    test('debe de emitir "seleccion" con  sus respectivos parámetros al hacer click', ()=>{

        //Hay 4 li
        const [li1, li2, li3, li4] = wrapper.findAll('li')


        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        console.log(wrapper.emitted('selection'))

        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([1])
        expect(wrapper.emitted('selection')[1]).toEqual([2])
        expect(wrapper.emitted('selection')[2]).toEqual([3])
        expect(wrapper.emitted('selection')[3]).toEqual([4])


    })

})