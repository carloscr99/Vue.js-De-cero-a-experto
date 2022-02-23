import mapboxgl from 'mapbox-gl';
import { defineComponent, ref, onMounted } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';


export default defineComponent({
    name:'MapView',
    setup(){

        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserLocationReady } = usePlacesStore();

        const initMap = () =>{
            const map = new mapboxgl.Map({
                container: mapElement.value!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation!, // starting position [lng, lat]
                zoom: 15 // starting zoom
                });
        }
        
        onMounted(()=>{
            console.log(mapElement.value)
        })

        return{
           isUserLocationReady, mapElement
        }
    }

})