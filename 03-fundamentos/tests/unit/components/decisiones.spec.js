import {shallowMount} from '@vue/test-utils'
import Decisiones from '@/components/Decisiones.vue'
import { createLogicalAnd } from 'typescript';

describe('Decisiones Component', ()=>{

    let wrapper;
    let consoleLogSpy;

    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            "answer": "yes",
            "forced": false,
            "image": "https://yesno.wtf/assets/yes/2.gif"
        })
    }))
    
    beforeEach(()=> {
        wrapper = shallowMount(Decisiones)

        consoleLogSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()

    })


    test('debe de hacer match', ()=>{

            expect (wrapper.html()).toMatchSnapshot()
        
    })

    test('Escribir en el input no ejecuta', async()=>{

        //.mv -> apuntamos a la instáncia de vue para acceder al metodo
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola mundo')

        expect( consoleLogSpy ).toHaveBeenCalledTimes(1)

        expect(getAnswerSpy).toHaveBeenCalledTimes(0)

    })

    test('Escribir ? dispara el getAnswer', async()=>{

     
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')

       

        expect( consoleLogSpy ).toHaveBeenCalledTimes(2)
        expect( getAnswerSpy ).toHaveBeenCalled()

        

    })

    test('pruebas en getAnswer', async()=>{

       await wrapper.vm.getAnswer()

       const img = wrapper.find('img')

       expect( img.exists() ).toBeTruthy()
       expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')

    })

    test('pruebas en getAnswer - Fallo en el API', async()=>{

        fetch.mockImplementationOnce(() => {
            Promise.reject("API no funciona")
        })

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API')

    })

})
