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

    //GETTERS:

    test('getters: getEntriesByTern getEntryById', () =>{


        const store = createViewStore(journalState)

        const [ entry1, entry2 ] = journalState.entries 

        expect(store.getters['journal/getEntriesByTerm']('').length).toBe(2)
        expect(store.getters['journal/getEntriesByTerm']('pruebas').length).toBe(1)

        expect(store.getters['journal/getEntriesByTerm']('pruebas')).toEqual([entry1])


        expect(store.getters['journal/getEntryById']('-Mti8hhO7by3yi_GKylc')).toEqual(entry1)
        


    })

    //Actions

    test('actions: loadEntries', async () => {

        const store = createViewStore({isLoading: true, entries: [] })

        await store.dispatch('journal/loadEntries')

        expect( store.state.journal.entries.length ).toBe(3)

    })

    test('actions: updateEntry', async () => {

        const store = createViewStore(journalState)

        const updatedEntry = {
            id: '-Mti8hhO7by3yi_GKylc',
            date : 1642525542842,
            picture : "https://res.cloudinary.com/dh7vxoobp/image/upload/v1642525560/curso-vue/zqozcdgzibdyzsu9gfvx.png",
            text : "Segunda entrada modificada desde pruebas",
            campoNuevo: "nuevo campo desde test"
        }

        await store.dispatch('journal/updateEntry', updatedEntry)

        expect( store.state.journal.entries.length ).toBe(2)
        expect( store.state.journal.entries.find(e => e.id === updatedEntry.id) ).toEqual({
            id: '-Mti8hhO7by3yi_GKylc',
            date : 1642525542842,
            picture : "https://res.cloudinary.com/dh7vxoobp/image/upload/v1642525560/curso-vue/zqozcdgzibdyzsu9gfvx.png",
            text : "Segunda entrada modificada desde pruebas",
        })

    })

    test('actions: createEntry, deleteEntry', async()=>{

        //create store
        const store = createViewStore(journalState)

        // newEntry = { date: 1642525542842, text: 'Creación desde las pruebas' }
        const newEntry = {
            date: 1642525542842, 
            text: 'Creación desde las pruebas'
        }

        //dispatch de la acción createEntry
        //obtener el id de la nueva entrada
        const id = await store.dispatch('journal/createEntry', newEntry)

        console.log("test actions => createEntry", id)

        // ID debe de ser un string

        expect(typeof id ).toBe('string')

        //La nueva entrada debe de existir en el state.journal.entries...

        expect(store.state.journal.entries.find(e => e.id === id)).toBeTruthy()

        //# Segunda parte

        // dispatch deleteEntry

        await store.dispatch('journal/deleteEntry', id)

        //La nueva entrada NO debe de existir en el state.journal.entries...

        expect(store.state.journal.entries.find(e => e.id === id)).toBeFalsy()


    })



})