import { shallowMount } from "@vue/test-utils"
import { createStore } from "vuex"
import { journalState } from "../../../mock-data/test-journal-state"
import EntryList from '@/modules/daybook/components/EntryList.vue'
import journal from '@/modules/daybook/store/journal'


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


describe('Pruebas en el EntryList', () =>{
    

    // const journalMockModule = {
    //     namespaced: true,
    //     getters:{
    //         getEntriesByTerm
    //     },
    //     state: () => ({
    //         isLoading: false,
    //         entries: journalState.entries
    //     })
    // }

    // const store = createStore({
    //     modules: {
    //         journal: { ...journalMockModule }
    //     }
    // })


    const store = createViewStore(journalState)
    
    const mockRouter = {
        push: jest.fn()
    }

   

    let wrapper 

    beforeEach(()=>{
        jest.clearAllMocks()
        wrapper = shallowMount(EntryList, {
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })
    
    })




    test('debe de llamar el getEntriesByTerm sin termino y mostrar 2 entradas', ()=>{


        console.log(wrapper.html())

        expect (wrapper.findAll('entry-stub').length).toBe(2)
        expect (wrapper.html()).toMatchSnapshot()

    })

    test('debe de llamar el getEntryByTerm y filtrar las entradas ', async()=>{

        const input = wrapper.find('input')
        await input.setValue('Segunda')

        expect (wrapper.findAll('entry-stub').length).toBe(1)


    })

    test('el boton de nuevo debe de redireccionar a /new ', () =>{

        wrapper.find('button').trigger('click')

        expect( mockRouter.push ).toHaveBeenCalledWith({name: 'entry', params: { id: 'new' }})

    })

})