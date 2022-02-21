<template>
  <q-page class="flex column q-pa-md">

    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>
   
   <q-separator />
   
    <span class="text-subtitle1">subtitle 1</span>
    <span class="text-subtitle2">subtitle 2</span>

    <q-separator />

    <p class="text-body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor facilisis lorem, eu dignissim nulla tempus vel. Morbi vel imperdiet nisl. Nullam sed velit quis erat tincidunt venenatis a non nisi. Curabitur vel fermentum justo. Proin laoreet mauris est, ac porta justo ullamcorper feugiat. Nam egestas urna dui, eu luctus augue elementum ut. In egestas fermentum arcu pretium fermentum. Morbi sed convallis justo, ut blandit justo. Mauris venenatis commodo purus a cursus. Sed varius quis turpis sit amet malesuada. Mauris at mollis felis. Donec vitae libero ac velit consequat aliquam at eu tellus.</p>
    <p class="text-body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor facilisis lorem, eu dignissim nulla tempus vel. Morbi vel imperdiet nisl. Nullam sed velit quis erat tincidunt venenatis a non nisi. Curabitur vel fermentum justo. Proin laoreet mauris est, ac porta justo ullamcorper feugiat. Nam egestas urna dui, eu luctus augue elementum ut. In egestas fermentum arcu pretium fermentum. Morbi sed convallis justo, ut blandit justo. Mauris venenatis commodo purus a cursus. Sed varius quis turpis sit amet malesuada. Mauris at mollis felis. Donec vitae libero ac velit consequat aliquam at eu tellus.</p>

    <q-separator />

<span class="text-weight-thin" > Tempor ea in ipsum minim aute dolore esse qui irure ullamco.</span>
<span class="text-weight-light" > Ea ullamco ipsum consequat amet est labore cupidatat magna duis.</span>
<span class="text-weight-regular" > Minim irure laboris aliquip est cupidatat velit duis voluptate excepteur anim veniam esse amet.</span>
<span class="text-weight-medium" > Eiusmod aute aliquip qui duis minim nostrud.</span>
<span class="text-weight-bold" > Voluptate consectetur eiusmod est laborum do velit eu esse amet adipisicing.</span>
<span class="text-weight-bolder" > Incididunt do aliquip occaecat ipsum consequat nulla Lorem quis fugiat esse Lorem eu nisi.</span>

<q-btn
color="primary"
label="Abrir menú lateral"
class="q-mt-md"
@click="togglSeideMenu"
/>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import useUI from '../composables/useUI'

export default defineComponent({
  name: "Typography",

  setup(){


  const {sideMenuOpen, toggleSideMenu} = useUI()
   


    return {

      sideMenuOpen, toggleSideMenu,
     
     
    };

  }

});
</script>
