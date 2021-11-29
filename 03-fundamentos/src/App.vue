<template>
<!--  <img alt="Vue logo" src="./assets/logo.png"> -->
 
  
  <!-- <Counter title="Entraron" /> --> 

 <!-- <Counter :start="130" />  -->

 <Decisiones />

</template>

<script>
import Counter from './components/Counter.vue'
import Decisiones from './components/Decisiones.vue'
import './css/css.css'

export default {
  name: 'App',
  components: {
    Counter,
    Decisiones
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
