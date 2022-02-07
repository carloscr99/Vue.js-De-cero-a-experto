<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
import { 
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated
  
 } from "vue";

export default {
  setup() {
    

	
	
	onBeforeMount (() =>{
    console.log("onBeforeMount")
  })
	onMounted (() =>{
    console.log("onMounted")
  })
	onBeforeUpdate (() =>{
    console.log("onBeforeUpdate")
  })
	onUpdated (() =>{
    console.log("onUpdated")
  })
	onBeforeUnmount (() =>{
    console.log("onBeforeUnmount")
  })
	onUnmounted (() =>{
    console.log("onUnmounted")
  })
	onErrorCaptured (() =>{
    console.log("onErrorCaptured")
  })
	onRenderTracked (() =>{
    console.log("onRenderTracked")
  })
	onRenderTriggered (() =>{
    console.log("onRenderTriggered")
  })
	onActivated (() =>{
    console.log("onActivated")
  })
	onDeactivated (() =>{
    console.log("onDeactivated")
  })

  },
}
</script>
