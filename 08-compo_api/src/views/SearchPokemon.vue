

<template>
  <dir>
      <h1>Buscar pokemon: {{pokemonId}} </h1>
      <form @submit.prevent="onSubmit">
          <input type="number"
            placeholder="Número del pokémon"
            ref="txtSearchId"
            v-model="pokemonId">
      </form>
      <br>
      <span>Presione enter para buscar</span>
  </dir>
</template>

<script>
import { ref, onActivated } from 'vue'
import {useRouter} from 'vue-router'
export default {

    setup(){
        const pokemonId = ref(1)
        const txtSearchId = ref()
        const router = useRouter()

        onActivated(()=>{
            txtSearchId.value.select()
        })


    return {
        pokemonId, txtSearchId,

        onSubmit: () => {
            console.log('Pokemon on submit _> ', pokemonId.value)

            router.push({name: 'pokemon-id', params:{
                id: pokemonId.value
            }})
        
        }
    }

    },


}
</script>

<style>

</style>