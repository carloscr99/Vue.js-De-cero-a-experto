import mapboxgl from 'mapbox-gl';
import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';



export default defineComponent({
    name:'MapView',
    setup(){

        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async () =>{

            if(!mapElement.value) throw new Error('Div Element noexist');
            if(!userLocation.value) throw new Error('User location no existe');

            //Primero termian los procesos sincronos, y luego procesa el resto
            await Promise.resolve();
 
            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
                });

                const myLocationPopUp = new mapboxgl.Popup().setLngLat(userLocation.value).setHTML(`
                <h4>Estás aquí </h4>
                <p>Bienvenido</p>
                `);

                const myLocationMarker = new mapboxgl.Marker().setLngLat(userLocation.value)
                .setPopup(myLocationPopUp)
                .addTo(map);

                //Todo: Establecer el mapa en viewx

                setMap(map);


        }
        
        onMounted(()=>{
            if(isUserLocationReady.value)
                return initMap();


            console.log("Aún sin localización");
        });

        watch(isUserLocationReady, (newVal) =>{
            if(isUserLocationReady.value)
                initMap()
        })

        return{
           isUserLocationReady, mapElement
        }
    }

})