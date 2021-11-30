import {shallowMount} from '@vue/test-utils'
import Decisiones from '@/components/Decisiones.vue'
import { createLogicalAnd } from 'typescript';

describe('Decisiones Component', ()=>{

    let wrapper;
    let consoleLogSpy;
    
    beforeEach(()=> {
        wrapper = shallowMount(Decisiones)

        consoleLogSpy = jest.spyOn(console, 'log')

    })


    test('debe de hacer match', ()=>{

            expect (wrapper.html()).toMatchSnapshot()
        
    })

    test('Escribir en el input no ejecuta', async()=>{

        const input = wrapper.find('input')
        await input.setValue('Hola mundo')

        expect( consoleLogSpy ).toHaveBeenCalledTimes(2)

    })

    test('Escribir ? dispara el fetch',()=>{

        

    })

    test('pruebas en getAnswer',()=>{

        

    })

    test('pruebas en getAnswer - Fallo en el API',()=>{

        

    })

})
