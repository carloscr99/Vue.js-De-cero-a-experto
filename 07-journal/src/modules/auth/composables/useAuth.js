import { computed } from "vue"
import { useStore } from "vuex"


const useAuth = () =>{

    const store = useStore()

    const createUser = async (user) =>{

        console.log( 'useAuth: ',  user)

        const resp = await store.dispatch('auth/createUser', user)

         return resp

       
    }

    const signInUser = async (user) =>{

        console.log( 'signInUser: ',  user)

        const resp = await store.dispatch('auth/signInUser', user)

         return resp

       
    }

    const checkAuthStatus = async() =>{

        const resp = await store.dispatch('auth/checkAuthentication')

        return resp


    }

    const logout = () =>{
        store.commit('auth/logout')
        store.commit('journal/clearEntries')
    }


    return{
        createUser, signInUser, checkAuthStatus, logout,

        authStatus: computed(()=> store.getters['auth/currentState']),
        userName: computed(()=> store.getters['auth/userName']),
    }



}

export default useAuth