

// export const myGetter = ( state ) =>{
//     return state   
// }

export const currentState = ( state ) =>{
    return state.status 
}

export const userName = ( state ) =>{
    //Si existe el usuario, devolvemos el nombre
    return state.user?.name  || ''
}