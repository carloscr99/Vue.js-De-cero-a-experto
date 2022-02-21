<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleSideMenu"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>
<!-- TODO -->
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="sideMenuOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { linksList } from "../router/link-list";
import  useUI from "../composables/useUI.js";

export default ({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    

    const {sideMenuOpen, toggleSideMenu} = useUI()
   


    return {

      sideMenuOpen, toggleSideMenu,
      essentialLinks: linksList,
     
    };
  },
});
</script>
