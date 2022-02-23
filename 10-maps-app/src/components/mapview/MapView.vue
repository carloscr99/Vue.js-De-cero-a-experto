<script lang="ts" src="./MapView.ts"/>

<template>
<div>

  <div v-if="!isUserLocationReady" 
class="loading-map d-flex justify-content-center align-items-center">
  <div class="text-center">
    <h3>Espere por favor</h3>
    <span>Localizando....</span>

  </div>


</div>

  <div ref="mapElement" 
  v-show="isUserLocationReady" 
  class="map-container"></div>

  
</div>

</template>


<style scoped>
.map-container{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: red;
}
.loading-map{
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  height: 100vh;
  left: 0;
  top: 0px;
  width: 100vw;
  z-index: 9990;

}

</style>