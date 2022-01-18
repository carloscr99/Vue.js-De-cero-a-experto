import journalApi from "../../../../api/journalApi"


// export const myAction = async({ commit }) =>{

// }
    

export const loadEntries = async( { commit } ) =>{

    const { data } = await journalApi.get('/entries.json')

    if( !data ){
        commit('setEntries', [])
        return
    }

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
export const updateEntry = async( {commit} , entry) => { //entry debe de ser un parametro

    console.log('updateEntry -> commit: ', commit)

    console.log('updateEntry -> entry: ', entry)
    
    // Extraer solo la información necesaria (quitar el ID)
    const { date, picture, text } = entry

    const dataToSave =  { date, picture, text }

    const resp = await journalApi.put( `entries/${entry.id}.json`, dataToSave)

    console.log(resp)

    //Commit de una mutación -> updateEntry
    //... para no enviar el objeto como referencia
    commit('updateEntry', {...entry})
    
}
export const createEntry = async( { commit }, entry ) =>{

    const { date, picture, text } = entry
    const dataToSave =  { date, picture, text }


    const {data} = await journalApi.post( `/entries.json`, dataToSave)
    
    dataToSave.id = data.name
    
    commit('addEntry', dataToSave)

    return data.name

}

export const deleteEntry = async({ commit }, id) =>{

     await journalApi.delete(`/entries/${id}.json`)

    commit('deleteEntry', id) 

}