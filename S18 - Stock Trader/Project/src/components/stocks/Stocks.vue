<template>
<v-container grid-list-lg>
<v-layout row wrap justify-center>
	<v-flex xs12 sm3 v-for="stock in getStocks" :key="stock.name" >
		<app-stock :stock="stock" ></app-stock>
	</v-flex>
</v-layout>
</v-container>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../../store/types";

import Stock from "./Stock.vue";

export default {
	computed: {
		...mapGetters({
			getStocks: types.GET_PUBLIC_STOCKS
		})
	},

	components: {
		appStock: Stock
	},
}
</script>
