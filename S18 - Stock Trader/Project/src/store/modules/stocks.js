import * as types from "../types";

const state = {
	stocks: [
		{ name: "BMW", price: 10, id: 1, quantity: 100 },
		{ name: "Google", price: 15, id: 2, quantity: 80 },
		{ name: "Apple", price: 25, id: 3, quantity: 200 },
		{ name: "Twitter", price: 5, id: 4, quantity: 50 },
	]
};

const getters = {
	[types.GET_PUBLIC_STOCKS]() {
		return state.stocks;
	}
};

const mutations = {
	[types.ADD_PUBLIC_STOCK](state, stock) {
		state.stocks.push(stock);
	},

	[types.REMOVE_PUBLIC_STOCK](state, stockId) {
		const index = state.stocks.findIndex(stock => stock.id === stockId);
		state.stocks.splice(index, 1);
	},

	[types.INCREMENT_PUBLIC_STOCK_QTY](state, payload) {
		const stock = state.stocks.find(stock => stock.id === payload.stockId);
		stock.quantity = Number(stock.quantity) + Number(payload.quantity);
	},

	[types.DECREMENT_PUBLIC_STOCK_QTY](state, payload) {
		const stock = state.stocks.find(stock => stock.id === payload.stockId);
		stock.quantity = Number(stock.quantity) - Number(payload.quantity);
	}
};

const actions = {};

export default {
	state,
	getters,
	mutations,
	actions
};