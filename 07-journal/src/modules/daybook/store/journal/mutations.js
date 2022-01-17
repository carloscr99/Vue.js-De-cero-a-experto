

// export const myMutations = ( state ) =>{
    
// }

// Las mutaciones son las que pueden cambiar el state

export const setEntries = (  state, entries ) =>{

    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false
    
}
export const updateEntry = ( state, entry  ) =>{ // entry actualizado

    // state.entries => es un arreglo, y hay que modificarlo con la nueva información
    // Obtenemos el index de la posición del array donde está la entrada que coincide con el id de la entrada que vamos a modificar
    const index = state.entries.map(e => e.id).indexOf(entry.id)

    console.log({index})

    state.entries[index] = entry

    // state.entries = ...entry
    
}
export const addEntry = (  state, entry ) =>{

    //Colocamios al principio la nueva entrada
    state.entries = [entry, ...state.entries] 

    
    
}