import { shallowMount } from '@vue/test-utils'
import Fab from '@/modules/daybook/components/Fab'


describe('Pruebas en el FAB component', ()=>{

    test('debe de mostrar el icono por defecto', ()=>{

        const  wrapper = shallowMount(Fab)
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-plus')).toBeTruthy()

        // fa plus

    })

    test('debe de mostrar el ícono por argumento: fa-circle', ()=>{

      // fa-circle

      const wrapper = shallowMount( Fab,{
          props: {
              icon: 'fa-circle'
          }
      })
         
    })

    test('debe de emitir el evento on:click cuando se hace click', ()=>{

      // wapper.emitter('on:click)
      const  wrapper = shallowMount(Fab)

      wrapper.find('button').trigger('click')

      expect(wrapper.emitted('on:click')).toHaveLength(1)

      
         
    })

})