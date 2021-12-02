<template>
  
  <div class="pokemon-container">
    <img v-if="!showPokemon"  :src="imgSrc"
    class="hidden-pokemon"
  alt="Pokemon">
  
  <img v-else :src="imgSrc"
  class="fade-in"
  alt="Pokemon">
  </div>

</template>

<script>

// pokemonId -> number and required

export default {

  props:{
    pokemonId: {
      type: Number,
      required: true,
    }, 
    showPokemon:{
      type: Boolean,
      required: true,
      default: false,
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
    }
  }

}


</script>
<!-- Para que el css solo se aplique en este componente -->
<style scoped>

/* Pokemon Picture */
.pokemon-container {
    height: 200px;
}
img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
    filter: brightness(0);
}

</style>