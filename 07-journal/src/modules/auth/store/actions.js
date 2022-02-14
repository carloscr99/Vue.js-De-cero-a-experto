
import authApi from "../../../api/authApi"

// export const myAction = async({ commit }) =>{


    
// }

export const createUser = async({ commit }, user) =>{

    const { name, email, password } = user

    console.log("-> ", commit, " -... name: " , name, ' email: ', email)
 
    try {
        
        const {data} = await authApi.post(':signUp', {email, password, returnSecureToken: true})
        console.log(data)

        return { ok: true }
    
    
    } catch (error) {
        return { ok: false, message: '.....' } 
    }
    
}