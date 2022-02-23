import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit }) {
        // todo: colocar loading

        navigator.geolocation.getCurrentPosition(
            ({coords}) => commit('setLngLat', {lat: coords.latitude, lng: coords.longitude }),
            (err) => {
                console.error(err);
                throw new Error("No Geolocation");
                
            }
        );
    }
}



export default actions;