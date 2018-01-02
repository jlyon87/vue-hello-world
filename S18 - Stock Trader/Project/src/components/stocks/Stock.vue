<template>
  <v-card class="text-xs-center">
    <v-card-title>{{ stock.name }}</v-card-title>
    <v-card-text>Price: ({{ stock.price }})</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="green" @click="buyStock" >Buy</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as types from "../../store/types";

export default {
  props: {
    stock: {
      type: Object,
      required: true
    }
  },

	computed: {
		...mapGetters({
			getFunds: types.GET_FUNDS
		})
	},

	methods: {
		...mapActions({
			decrement: types.DECREMENT_FUNDS,
			addStock: types.ADD_PORTFOLIO_STOCK
		}),

		buyStock() {
			console.log("Buying: ", this.stock);
			if(this.getFunds >= this.stock.price) {
				this.addStock(this.stock);
				this.decrement(this.stock.price);

			} else {
				alert("Insufficient funds.");
			}
		}
	}
}
</script>

