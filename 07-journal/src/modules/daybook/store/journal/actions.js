import journalApi from "../../../../api/journalApi"


// export const myAction = async({ commit }) =>{

// }
    

export const loadEntries = async( { commit } ) =>{

    const { data } = await journalApi.get('/entries.json')

    const entries = []
    for( let id of Object.keys(data)){
        console.log(id)
        entries.push({
            id,
            ...data[id]
        })
    }

    // Con el commit llamamos a las mutations, y enviamos las entradas
    commit('setEntries', entries)
    
}
export const updateEntry = async( /*{ commit }*/ ) =>{
    
}
export const createEntry = async( /*{ commit }*/ ) =>{
    
}