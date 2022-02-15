
import authApi from "../../../api/authApi"

// export const myAction = async({ commit }) =>{


    
// }

export const createUser = async({ commit }, user) =>{

    const { name, email, password } = user

    console.log("-> ", commit, " -... name: " ,
     name, ' email: ', email, 'passwd _> ', password)
 
    try {
        
        const {data} = await authApi.post(':signUp', {email, password, returnSecureToken: true})
        
        const { idToken, refreshToken } = data

        await authApi.post(':update', {displayName: name, idToken})

        //Eliminamos la contraseña dado que no está encriptada
        delete user.password
        commit('loginUser', {user, idToken, refreshToken})

        return { ok: true }
    
    
    } catch (error) {
        return { ok: false, message: error.response.data.error.message} 
    }
    
}