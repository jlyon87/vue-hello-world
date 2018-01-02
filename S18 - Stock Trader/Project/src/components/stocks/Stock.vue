<template>
	<v-card class="text-xs-center">
		<v-card-title>{{ stock.name }} ({{ stock.quantity }})</v-card-title>
		<v-card-text>Price: ({{ stock.price }})</v-card-text>
		<v-card-actions>
			<v-text-field
				label="Quantity"
				type="number"
				required
				:rules="[() => quantity <= stock.quantity && quantity > 0 || 'Invalid entry.']"
				v-model="quantity"
				ref="quantity" ></v-text-field>

			<v-btn flat color="green" @click="buyStock" >Buy</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import * as types from "../../store/types";

export default {
	data() {
		return {
			quantity: {
				type: Number
			}
		};
	},

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
		...mapMutations({
			decrementFunds: types.DECREMENT_FUNDS,
			incrementPortfolioStockQty: types.INCREMENT_PORTFOLIO_STOCK_QTY,
			decrementPublicStockQty: types.DECREMENT_PUBLIC_STOCK_QTY,
			addPortfolioStock: types.ADD_PORTFOLIO_STOCK,
			removePublicStock: types.REMOVE_PUBLIC_STOCK
		}),

		buyStock() {
			const cost = this.stock.price * this.quantity;
			if(this.getFunds >= cost && this.quantity <= this.stock.quantity) {
				this.decrementFunds(cost);

				const payload = {};
				payload.quantity = this.quantity;
				payload.stockId = this.stock.id;

				const hasPortfolioStock = (this.$store.state.portfolio.stocks.findIndex(stock => stock.id === this.stock.id)) !== -1;
				if(hasPortfolioStock) {

					this.incrementPortfolioStockQty(payload);

				} else {
					const newStock = Object.assign({}, this.stock);
					newStock.quantity = this.quantity;
					this.addPortfolioStock(newStock);
				}

				this.decrementPublicStockQty(payload);

				if(this.stock.quantity === 0) {
					this.removePublicStock(this.stock.id);
				}

			} else {
				alert("Insufficient funds.");
			}
		}
	}
}
</script>

