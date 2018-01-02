import * as types from "../types";

const state = {
	stocks: []
};

const getters = {
	[types.GET_PORTFOLIO_STOCKS]() {
		return state.stocks;
	},
};

const mutations = {
	[types.ADD_PORTFOLIO_STOCK](state, stock) {
		state.stocks.push(stock);
	},

	[types.REMOVE_PORTFOLIO_STOCK](state, stockId) {
		const index = state.stocks.findIndex(stock => stock.id === stockId);
		state.stocks.splice(index, 1);
	},

	[types.INCREMENT_PORTFOLIO_STOCK_QTY](state, payload) {
		const stock = state.stocks.find(stock => stock.id === payload.stockId);
		stock.quantity = Number(stock.quantity) + Number(payload.quantity);
	},

	[types.DECREMENT_PORTFOLIO_STOCK_QTY](state, payload) {
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