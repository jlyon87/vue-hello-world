<template>
<v-container fluid grid-list-lg>
<v-layout row wrap>
  <v-flex v-if="stocks.length > 0" v-for="stock in stocks" :key="stock.name" >
    <app-stock :stock="stock" ></app-stock>
  </v-flex>

  <v-subheader v-if="stocks.length === 0" >No Stocks here. Go buy some on the Stocks page.</v-subheader>
</v-layout>
</v-container>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    return {
      stocks: [
        { name: "BMW", price: 110 }
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

