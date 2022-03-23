import axios from "axios";


const directionsApi = axios.create({

    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiY2FybG9zY3IiLCJhIjoiY2t6enNxbXhuMDBkODNwbXNwZTEwNWQ0bSJ9.ZVYlXCfd07BCrKFLpg_LlA'
    
    }

});

export default directionsApi