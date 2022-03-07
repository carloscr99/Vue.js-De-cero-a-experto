import mapboxgl from 'mapbox-gl';
export interface MapState {
    map?: mapboxgl.Map;
    markers: mapboxgl.Marker[];
    distante?: number;
    duration?: number;
}

function state(): MapState {
    return {
        map: undefined,
        markers: [],
        distante: undefined,
        duration: undefined
    }
}

export default state;