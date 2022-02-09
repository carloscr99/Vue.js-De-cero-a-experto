import { ref } from 'vue'
import axios from 'axios'
const usePokemon = ( pokemonId = 1 ) =>{

    const pokemon = ref()
    const isLoading = ref(false)
    const errorMessage = ref()

    const searchPokemon = async (id) =>{

        isLoading.value = true
        pokemon.value = null

        if(!id) return

        try {

            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

            pokemon.value = data
            isLoading.value = false
            
        } catch (error) {
            errorMessage.value = "No se pudo cargar ese pokémon"
        }



    }

    searchPokemon(pokemonId)


    return{
        pokemon, isLoading,errorMessage, searchPokemon
    }

    
}
export default usePokemon