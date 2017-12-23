<template>
  <v-card class="text-xs-center">
    <v-card-title>{{ stock.name }}</v-card-title>
    <v-card-text>Price: ({{ stock.price }})</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="red" @click="sellStock" >Sell</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  methods: {
    sellStock() {
      console.log("Sell: ", this.stock);
    }
  }
}
</script>

