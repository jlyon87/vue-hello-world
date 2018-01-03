<template>
	<v-card class="text-xs-center">
		<v-card-title>{{ stock.name }} ({{ stock.quantity }})</v-card-title>
		<v-card-text>
			<p>Quantity: {{ stock.quantity }}</p>
			<p>Price: {{ stock.price }}</p>
		</v-card-text>
		<v-card-actions>
			<v-text-field
				label="Quantity"
				type="number"
				required
				:rules="[() => quantity <= stock.quantity && quantity > 0 || 'Invalid entry.']"
				v-model.number="quantity"
				ref="quantity" ></v-text-field>

			<v-btn flat color="red" @click="sellStock" >Sell</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { mapMutations } from "vuex";
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
			required: true,
		}
	},

	methods: {
		...mapMutations({
			increment: types.INCREMENT_FUNDS,
			incrementPublicStockQty: types.INCREMENT_PUBLIC_STOCK_QTY,
			decrementPortfolioStockQty: types.DECREMENT_PORTFOLIO_STOCK_QTY,
			removePortfolioStock: types.REMOVE_PORTFOLIO_STOCK,
			addPublicStock: types.ADD_PUBLIC_STOCK
		}),

		sellStock() {
			const profit = this.stock.price * this.quantity;

			const payload = {};
			payload.quantity = this.quantity;
			payload.stockId = this.stock.id;

			if(this.quantity <= this.stock.quantity) {
				this.increment(profit);

				const hasPublicStock = this.$store.state.publicStocks.stocks.findIndex(stock => stock.id === this.stock.id) !== -1;

				if(hasPublicStock) {

					this.incrementPublicStockQty(payload);
				} else {

					const newStock = Object.assign({}, this.stock);
					newStock.quantity = this.quantity;
					this.addPublicStock(newStock);
				}

				this.decrementPortfolioStockQty(payload);

				if(this.stock.quantity === 0) {
					this.removePortfolioStock(this.stock.id);
				}

			} else {

				alert("You cannot sell more than you have.");
			}
		}
	}
}
</script>