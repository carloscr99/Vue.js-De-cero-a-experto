
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";
import { usePlacesStore, useMapStore } from '../../composables';

export default defineComponent({
    name:"SearchResult",

    setup(){

        const {isLoadingPlaces, places, userLocation} = usePlacesStore();
        const activePlace = ref('');
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();

        watch(places, (newPlaces) =>{
            activePlace.value = '',
            setPlaceMarkers(newPlaces)
        })



        return{
            isLoadingPlaces, places, activePlace, 

            onPlaceClicked: ( place: Feature ) => {
        
                activePlace.value = place.id;

                const [ lng, lat ] = place.center;
                
                //El ? hace que solo ejecute el código si tiene valor
                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14
                })
            },

            getRouteDirections: (place: Feature) =>{

                if(!userLocation.value) return

                const [ lng, lat ] = place.center;

                const [startlng, startlat] = userLocation.value;

                const start: [number, number] = [startlng, startlat];
                const end: [number, number] = [lng, lat]

                getRouteBetweenPoints(start, end);

            }

        }
    }
})