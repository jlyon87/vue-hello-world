<template>
<v-container grid-list-lg>
<v-layout row wrap justify-center>
  <v-flex xs12 sm3 v-for="stock in stocks" :key="stock.name" >
    <app-stock :stock="stock" ></app-stock>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    return {
      stocks: [
        { name: "BMW", price: 110 },
        { name: "Google", price: 200 },
        { name: "Apple", price: 250 },
        { name: "Twitter", price: 8 },
      ]
    };
  },
  components: {
    appStock: Stock
  }
}
</script>
