import { createStore } from 'vuex'
import getRandomInt from '../helpers/getRandomInt'

export default createStore({

    state:{
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    // como si fueran methods y siempre han de ser sincronas
    mutations:{
        increment( state ){
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy( state, val ){
            state.count += val
            state.lastMutation = 'incrementBy'
            state.lastRandomInt = val
        },
        setLoading(state, val){

            state.isLoading = val
            state.lastMutation = 'setLoading'
        }
    },
    // estas si pueden ser async, y se usan para ejecutar acciones contra un backend (bd, http...)
    actions: {
        async incrementRandomInt(  {commit} ){

            commit('setLoading', true)
            
            const randomInt = await getRandomInt()
            
            commit('incrementBy', randomInt)
            commit('setLoading', false)

        }
    },
    //Pueden ser llamados en cualquier parte de la aplicación
    getters:{
        squareCount(state){
            //Se actualiza cuando el state cambia
            return state.count * state.count 
        }
    }

})