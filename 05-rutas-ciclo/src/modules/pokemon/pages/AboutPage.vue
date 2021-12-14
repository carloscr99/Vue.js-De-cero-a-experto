<template>
    <div>
        
    <h1>about page</h1>
    <hr>
    <h2>{{ name }}</h2>
    <button @click="changeName">Cambiar nombre</button>
    </div>

</template>


<script>

export default {
    data(){
        return{
            name: 'Carlos'
        }
    },
    methods: {
        changeName(){
            this.name = 'CCOLOMER'
        }
    },
    beforeCreate() {
        console.log("beforeCreate")
     },
    created() {
        console.log("created")
        //Peticiones HTTP
     },
    beforeMount() {
        console.log("beforeMount")
     },
    mounted() {
        console.log("mounted")
     },
    beforeUpdate() {
        console.log("beforeUpdate")
     },
    updated() {
        console.log("updated")
     },
    activated() {
        console.log("activated")
     },
    deactivated() {
        console.log("deactivated")
     },
    beforeUnmount() {
        console.log("beforeUnmount")
     },
    unmounted() {
        console.log("unmounted")
     },
    errorCaptured() {
        console.log("errorCaptured")
     },
    renderTracked() {
        console.log("renderTracked")
     },
    renderTriggered() {
        console.log("renderTriggered")
     },
}
</script>
