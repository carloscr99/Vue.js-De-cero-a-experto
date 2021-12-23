<template>
  <div>
        <h1>Counter - vue</h1>
        <h2>Direct access: {{ $store.state.counter.count }} </h2>
        <h2>Computed: {{ countComputed }} </h2>

        <button @click="increment">+1</button>
        <button @click="incrementBy">+5</button>
        <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

        <h1>MapState</h1>
        <h2>mapState: {{ count }}</h2>
        <h2>lastMutation: {{ lastMutation }}</h2>

        <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default ({

  //  computed: mapState(['count'])
  
    computed: {
        countComputed(){
            return this.$store.state.counter.count
        },
        //El primer argumento es el nombre del modulo 
        ...mapState('counter',['count', 'lastMutation', 'isLoading'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },

    methods:{
        increment(){
            //Entre () enviamos el nombre de la mutación que queremos llamar
            this.$store.commit('counter/increment')
        },
        incrementBy(){
            //Entre () enviamos el nombre de la mutación que queremos llamar
            this.$store.commit('counter/incrementBy', 5)
        },
        
        // incrementRandomInt(){
        //     // Llamaos a la propiedad del action
        //     this.$store.dispatch('incrementRandomInt')
        // }
       ...mapActions( 'counter', ['incrementRandomInt'])
       //En este caso, a diferéncia del anterior, lo que podemos hacer es cambiarle el nombre -randomInt-
        // ...mapActions('counter', {
        //     randomInt: 'incrementRandomInt'
        // })
    }


})
</script>
