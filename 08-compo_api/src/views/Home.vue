<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>

    <h3>{{ iroman }} </h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIroman">Cambiar Iroman</button> 
    <button @click="changeHulk">Cambiar Hulk</button> 

    <h3>Iroman: {{ iromanIsAlive }}</h3>
    <h3>Hilk: {{ hulkIsAlive }}</h3>

    <button @click="changeStatus">Cambiar estados</button>
      
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from 'vue';

export default {
  name: 'Home',


  setup(){
    const iroman = ref({name: 'Tony', age: 34})
    const hulk = reactive({name: 'Bruce', age: 54})

    const iromanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)
    
    const changeStatus= () =>{
        hulkIsAlive.value = !hulkIsAlive.value
        //iromanIsAlive = !iromanIsAlive
    }
 
 
    return {
      iroman, hulk, iromanIsAlive, hulkIsAlive, changeStatus,

      changeIroman: () =>{
        iroman.value.name = 'Toni Stark'
        iroman.value.age = 55
      },

      changeHulk(){
        hulk.name = 'Bruce Willice',
        hulk.age = 60
      }
    }
  
  }

}
</script>
