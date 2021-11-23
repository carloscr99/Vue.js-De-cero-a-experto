
const app = Vue.createApp({
    /*
    template: `
        <h1>Hola mundo</h1>
        <p>Desde app.js</p>
    `
    */
    data(){
        return{
            quote: "Bienvenido a mi app",
            author: 'Carlos C'

        }
    },
    methods: {
        cambiarFrase(  ){
            console.log("BotonPulsado")
            this.author = 'Carlos C R'

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }

})


app.mount('#myApp')