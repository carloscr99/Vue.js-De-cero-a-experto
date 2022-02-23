import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybG9zY3IiLCJhIjoiY2t6enNxbXhuMDBkODNwbXNwZTEwNWQ0bSJ9.ZVYlXCfd07BCrKFLpg_LlA';


if(!navigator.geolocation){
    throw new Error("Tu navegador no soporta el GeoLocation");
    
}

createApp(App).use(store).use(router).mount('#app')
