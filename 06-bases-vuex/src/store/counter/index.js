import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
// es un objeto
const counterStore = {
    namespaced: true,
    state,
    
    mutations,
    // estas si pueden ser async, y se usan para ejecutar acciones contra un backend (bd, http...)
    actions,
    //Pueden ser llamados en cualquier parte de la aplicación
    getters

}


export default counterStore