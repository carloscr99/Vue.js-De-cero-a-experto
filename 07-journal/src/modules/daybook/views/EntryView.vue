<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">

            <div>
                <span class="text-success fs-3 fw-bold">{{day}}</span>
                <span class="mx-1 fs-3">{{month}}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>

            <div>
                <button class="btn btn-danger mx-2">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="btn btn-primay">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>

        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">

            <textarea v-model="entry.text" placeholder="¿Que tal el día?"></textarea>

        </div>
        <Fab icon="fa-save"
        @on:click="saveEntry"/>

        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OciRQXR70LOSpcj15y-xagHaEb%26pid%3DApi&f=1" alt="entry-picture"
        class="img-thumbnail">


    </template>
</template>


<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';  // computed!
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent(() =>import('../components/Fab.vue'))
    },
    //Objeto reactivo
    data() {
        return {
            entry: null
        }
    },

    computed: {
        ...mapGetters('journal', ['getEntryById']),
        
        day() {
            const { day } = getDayMonthYear( this.entry.date )
            return day
        },
        month() {
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear( this.entry.date )
            return yearDay
        }
    },
    methods: {
        ...mapActions('journal', ['updateEntry', 'createEntry']),
        loadEntry(){
            let entry
            if(this.id === 'new'){
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            }else{
                entry = this.getEntryById(this.id)
                if ( !entry ) return this.$router.push({ name: 'no-entry' })
            }

          

            this.entry = entry
        },
        async saveEntry(){
           
        if( this.entry.id ){
            // Actualizar
             // Action del journal Module
            this.updateEntry(this.entry)
          
        }else{
            //Crear una nueva entrada
            console.log("nueva entrada")
            // await action
            const id = await this.createEntry(this.entry)

            this.$router.push({name: 'entry', params: { id }})
            // redirectTo => entry, param: id
        }
           
        }
    },
    created(){
        console.log(this.id)
        this.loadEntry()
    },
    //Cada vez que el id cambia, cargamos la entrada correspondiente
    watch: {
        id( ){
           this.loadEntry() 
        }
    }
}
</script>


<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>