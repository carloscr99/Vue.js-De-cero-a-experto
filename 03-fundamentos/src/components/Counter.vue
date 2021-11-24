<template>
<!-- -->
  <h2> {{ customTitle }} </h2>
  <p> {{ counter }} <sup> 2 </sup> = {{ squareCounter }} </p>

    <div>
        <!-- la @ es un sustitutivo de v:on -->
        <button @click="increase()">+1</button>
        <button @click="decrease()">-1</button>
    </div>

</template>

<script>
export default {

    props:{
        title: String,
        start: {
            type: Number,
            default: 100,
           // required:true
           validator(value){

               return value >= 0
               
           }
           
        }

    },

    data(){
        return{
            counter: this.start
        }
    },
    methods: {
        getSquareValue() {
            return this.counter * this.counter
        },
        increase(){
            this.counter++
       
        }, 
        decrease(){
            this.counter--

        }

    },
    //Se almacena en caché, por lo que solo se ejecuta
    // cuando se cambia el valor del mismo
    computed: {
        squareCounter(){
            return this.counter * this.counter
        },

        customTitle(){

            return this.title || 'Contador'

        }
        
    }
}
</script>

<style>

button{

    background-color: #64BB87;
    border-radius: 5px;
    color: white;
    margin: 0 5px;
    cursor: hand;

}

</style>