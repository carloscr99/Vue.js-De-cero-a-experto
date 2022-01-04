<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola mundo</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Seconday</button>
    <button @click="goToDaybook" class="btn btn-success">Success</button>

  </div>
</template>

<script>


export default {
  methods:{
    goToDayBook() {
      this.$router.push({ name: 'daybook' })
    }
  }
}
</script>
