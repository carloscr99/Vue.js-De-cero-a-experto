<template>

  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
      <h1>¿Quién es este pokémon ?</h1>

      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

      <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

      <template v-if="showAnswer">

        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame">Nuevo juego</button>

      </template>

  </div>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

import getPokemonOptions from '../helpers/getPokemonOptions'



export default {
  components: { PokemonPicture, PokemonOptions },
  data(){
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray(){
      this.pokemonArr = await getPokemonOptions()
      
      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]

    

    },
    //En PokemonOptions no tiene () por lo que recibinmos el primer parámetro, el cual hemos enviado desde la página de las opciones (pokemon.id)
    checkAnswer(selectedId){
      this.showPokemon = true
      this.showAnswer = true
      
      if(selectedId === this.pokemon.id){
        this.message = `Correcto!! El pokemon era ${this.pokemon.name}`
      }else{
        this.message = `Ups!! No has acertado el pokemon... El pokemon era ${this.pokemon.name}`
      }
      
    },
    newGame(){
      this.pokemonArr=[],
      this.showPokemon= false,
      this.showAnswer = false,
      this.pokemon = null,
      this.mixPokemonArray()
    }
  },
  mounted(){
    this.mixPokemonArray()
  }

}
</script>

