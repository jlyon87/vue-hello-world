<template>
<v-app dark>
  <v-content>
    <app-header></app-header>
    
     <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
</style>
