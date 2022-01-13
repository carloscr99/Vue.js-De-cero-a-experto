

// export const myMutations = ( state ) =>{
    
// }

// Las mutaciones son las que pueden cambiar el state

export const setEntries = (  state, entries ) =>{

    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false
    
}
export const updateEntry = ( /* state */ ) =>{
    
}
export const addEntry = ( /* state */ ) =>{
    
}