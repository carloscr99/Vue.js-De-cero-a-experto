<template>
  <div>
      <h1>Cunter vue</h1>
      <h2>{{counter}}</h2>

      <button @click="increase">+1</button>
      <button @click="decrease">-1</button>
  </div>
</template>

<script>
import useCounter from '@/composables/useCounter'

export default {

    name: 'Counter',
    props:{},
    emits:{},
    setup(){

        const { counter, increase, decrease } = useCounter(25)

        //Hemos de hacer return de todo lo que queremos que sea visible
        return{
            counter, increase, decrease
        }

    }

}
</script>

<style>

</style>