import * as types from "../types";
import stocks from "../../data/stocks";

const state = {
	stocks: []
};

const getters = {
	[types.GET_PUBLIC_STOCKS]() {
		return state.stocks;
	}
};

const mutations = {
	[types.SET_PUBLIC_STOCKS](state, stocks) {
		state.stocks = stocks;
	},

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

const actions = {
	[types.LOAD_PUBLIC_STOCKS]({ commit }) {
		commit(types.SET_PUBLIC_STOCKS, stocks);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
};