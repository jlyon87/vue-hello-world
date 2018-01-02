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
import { mapActions } from "vuex";
import * as types from "../../store/types";

export default {
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  methods: {
		...mapActions({
			increment: types.INCREMENT_FUNDS,
			removeStock: types.REMOVE_PORTFOLIO_STOCK
		}),

		sellStock() {
			console.log("Sell: ", this.stock);

			this.increment(this.stock.price);
			this.removeStock(this.stock.id);
		}
	}
}
</script>