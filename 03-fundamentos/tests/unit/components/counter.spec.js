import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/Components/Counter'

describe('Counter Component', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = shallowMount(Counter);
    })
    /*
    test('debe de hacer match con el snapshot', ()=>{

        
        //Wrapper: podemos saber si tiene botones, disparalos... 
        const wrapper = shallowMount(Counter)

        expect(wrapper.html()).toMatchSnapshot()
        

    })

    */

    test('h2 debe de tener el valor por defecto counter', ()=>{


        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        console.log(h2Value)

        expect ( h2Value ).toBe('Contador')

        

    })

    test('El valor por defecto debe de ser 100 en <p>', () =>{

 

        // pTags
        // const pTags = wrapper.findAll('p')
        // [] para indicar que es un atributo
         const value = wrapper.find('[data-testid="counter"]').text()
        
        //expect segundo p === 100
       // expect (pTags[1].text === 100).toBeTruthy
       expect (value).toBe('100')

    })

    test('Debe de incrementar en 1 el valor del contador', async()=>{


        //Hacemos la desestructuración como si fuera un objeto, donde el primer 
        //botón se asigna a la primera constante y el 2n al 2n
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        //Simula un click en el botón
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect (value).toBe('101')

    })


    test('Debe de establecer el valor por defecto', ()=>{

        console.log(wrapper.props())

        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect ( Number(value) ).toBe(start)

    })

    test('debe de mostrar la prop title', ()=>{

        const title = 'Hola mundo!!'

        const wrapper = shallowMount(Counter, {
            props:{
                title
            }
        })

        console.log(wrapper.html())

        expect(wrapper.find('h2').text()).toBe(title)

    })


})