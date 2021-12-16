<template>
    <div v-if="pokemon">

        <h1>Pokemon page</h1>
        <p>{{ id }}</p>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">

    </div>
</template>



<script>
import { getPokemons } from '../../../../../04-pokemon-game/src/helpers/getPokemonOptions'
export default {
    props: {
        
        id:{
            type: Number,
            required: true
        }
    
    },
    data(){
        return{
            pokemon: null
        }
    },
    created() {
       // const { id } = this.$route.params

        // console.log(id)
       // this.id = id

       // console.log(this.$attrs)
       this.getPokemon()
    },
    methods:{
        async getPokemon(){
            try{
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(r => r.json());
                console.log(pokemon)
                this.pokemon = pokemon
            }catch(error){
                this.$router.push('/')
                console.log("sin pokemon")
            }

        }
    },
    watch: {
        id(){
            this.getPokemon()
        }
    }

}
</script>