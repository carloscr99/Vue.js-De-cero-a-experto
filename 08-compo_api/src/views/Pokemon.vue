

<template>
  <div>
      <h1 v-if="!pokemon && !errorMessage">Buscando... </h1>

      <h1 v-else-if="errorMessage">{{errorMessage}}</h1>

      <div v-else>
          <h3>{{ pokemon.name }}</h3>
          <img :src="pokemon.sprites.front_default" :alt="pokemon.name">

          <br>
          <router-link :to="{name: 'pokemon-search'}">Volver</router-link>
      </div>
  </div>
</template>

<script>

import {useRoute, onBeforeRouteLeave} from 'vue-router'
import { watch } from 'vue'
import usePokemon from '../composables/usePokemon'

export default {

    setup(){

        const route = useRoute()
       
       const{ pokemon, isLoading,errorMessage, searchPokemon } = usePokemon(route.params.id)

        watch(
            //Cuanudo el id de la ruta cabia, se ejecuta el search pokemon
            () => route.params.id,
            () => searchPokemon(route.params.id)
            
        )

        onBeforeRouteLeave(()=>{
            console.log('onBeforeRouteLeave')

            const answer = window.confirm('¿Está seguro que desea salir?')
            
            if( !answer ) return false // false, bloquea la salida
        })

        return{
            pokemon, isLoading,errorMessage
        }

    }

}
</script>

<style>

</style>