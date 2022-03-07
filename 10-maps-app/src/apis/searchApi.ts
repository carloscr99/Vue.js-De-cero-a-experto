import axios from "axios";


const searchApi = axios.create({

    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiY2FybG9zY3IiLCJhIjoiY2t6enNxbXhuMDBkODNwbXNwZTEwNWQ0bSJ9.ZVYlXCfd07BCrKFLpg_LlA'
    
    }

});

export default searchApi