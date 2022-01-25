import { shallowMount } from "@vue/test-utils"
import { createStore } from "vuex"
import { journalState } from "../../../mock-data/test-journal-state"
import journal from '@/modules/daybook/store/journal'
import EntryView from '@/modules/daybook/views/EntryView.vue'
import Swal from 'sweetalert2'

const createViewStore = ( initialState ) =>
createStore({
    modules: {
        journal: {
            //Desestructuramos todo el contenido
            ...journal,
            state: {
                ...initialState
            }
        }
    }
})

jest.mock('sweetalert2', () =>({
    fire: jest.fn(),
    showLoading: jest.fn(),
    close: jest.fn()

}))

describe('Pruebas en el entryView', () =>{

    const store = createViewStore(journalState)

    store.dispatch = jest.fn()
    
    const mockRouter = {
        push: jest.fn()
    }

   

    let wrapper 

    beforeEach(()=>{
        jest.clearAllMocks()
        wrapper = shallowMount(EntryView, {
            props: {
                id: '-Mti8otNoP8i_GJlRjei',
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })
    
    })




    test('debe de sacar al usuario porque el id no existe', ()=>{

        const wrapper = shallowMount(EntryView, {
            props: {
            //id: '-Mti8otNoP8i_GJlRjei',
            id: 'id falso',
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })


        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry' })
        
        
    })
    
    test('debe de mostrar la entrada correctamente', ()=>{
        
        
        expect(wrapper.html()).toMatchSnapshot()
        expect( mockRouter.push ).not.toHaveBeenCalled()


    })


    test('debe de borrar la entrada y salir',  ()=>{

        Swal.fire.mockReturnValueOnce( Promise.resolve({ isConfirmed: true }))

        wrapper.find('.btn-danger').trigger('click')


        expect (Swal.fire).toHaveBeenCalledWith({
            title: '¿Estás seguro?',
            text: 'Una vez borrado, no se puede recuperar',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Si, estoy seguro'
        })

        setTimeout(()=>{
            expect(store.dispatch).toHaveBeenCalledWith('journal/deleteEntry', '-Mti8otNoP8i_GJlRjei')
            expect(mockRouter.push).toHaveBeenCalled()
            done()

        }, 1)

    })

})