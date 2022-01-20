import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../../mock-data/test-journal-state'



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


describe('Vuex - Pruebas en el Journal Module', () =>{


    //basicos
    test('este es el estado inicial, debe de tener este state', () => {


        const store = createViewStore( journalState )

        const { isLoading, entries } = store.state.journal

        expect(isLoading).toBeFalsy()
        expect(entries).toEqual(journalState.entries)

    })

    //Mutations
    test('mutations: setEntries', () =>{

        const store = createViewStore( {isLoading: true, entries: [] } )

        store.commit('journal/setEntries', journalState.entries)

        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.isLoading).toBeFalsy()


    })

    test('mutations: updateEntry', () =>{

        //Create store con entries
        const store = createViewStore( journalState )

        // updatedEntry
        const updatedEntry = {
            id: '-Mti8hhO7by3yi_GKylc',
            date : 1642525542842,
            picture : "https://res.cloudinary.com/dh7vxoobp/image/upload/v1642525560/curso-vue/zqozcdgzibdyzsu9gfvx.png",
            text : "Hola mundo desde pruebas"
        }

        // commit mutation
        store.commit('journal/updateEntry', updatedEntry)

        //Expect
        // entries.lenght = 2

        expect(store.state.journal.entries.length).toBe(2)

        // entries tiene que existir updatedEntry toEqual

        expect( store.state.journal.entries.find( e => e.id === updatedEntry.id )).toEqual(updatedEntry)


    })

    test('mutation: addEntry deleteEntry', ()=>{

        // crear store
        const store = createViewStore( journalState )

        // addEntry { id: 'ABC-123', text: 'Hola mundo'}

        store.commit('journal/addEntry', { id: 'ABC-123', text: 'Hola mundo'})

        const stateEntries = store.state.journal.entries

        //Expect

        //entradas sean 3

        expect(stateEntries.length).toBe(3)
        
        //entrada con el id ABC-123 exista
        
        expect(stateEntries.find( e => e.id === 'ABC-123')).toBeTruthy()
        
        //deleteEntry, 'ABC-123'
        
        store.commit('journal/deleteEntry', 'ABC-123')
        
        //Expect
        
        //entradas deben de ser 2
        expect(store.state.journal.entries.length).toBe(2)
        
        //entrada con el id ABC-123 no debe de existir
        expect(store.state.journal.entries.find( e => e.id === 'ABC-123')).toBeFalsy()

    })

})