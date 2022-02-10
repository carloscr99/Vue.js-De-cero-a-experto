
<template>
  <div>
      <h1>Aprendiendo Slots</h1>
      <button @click="openModal">Abrir Modal</button>
 
 
    <Modal v-if="isOpen" 
      title="Hola mundo desde customSlots"
      @on:close="closeModal">
        <!-- <h2>Titulo del modal</h2>
        <p>hehehehehe</p>
        <button>Cerrar</button> -->
        <template v-slot:footer>
           <button @click="closeModal">Salir</button>
        </template>
        <template v-slot:header>
            <h2> Título del modal </h2>
        </template>
        <template v-slot:body>
            <p> body del modal </p>
        </template>

        <template v-slot:exposed="slotProps">
            <h2>{{slotProps}}</h2>
        </template>

    </Modal>
 
 
  </div>

</template>

<script>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
export default {

    components:{ Modal },
    setup(){

      const isOpen = ref(false)

      return {
        isOpen,

        openModal: () => isOpen.value = true,
        closeModal: () => isOpen.value = false

      }

    }

}
</script>

<style>

</style>