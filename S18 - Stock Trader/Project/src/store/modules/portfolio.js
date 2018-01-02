import * as types from "../types";

const state = {
	stocks: []
};

const getters = {
	[types.GET_PORTFOLIO_STOCKS]() {
		return state.stocks;
	}
};

const mutations = {
	addStock(state, stock) {
		state.stocks.push(stock);
	},

	removeStock(state, stockId) {
		const index = state.stocks.findIndex(stock => stock.id === stockId);
		state.stocks.splice(index, 1);
	}
};

const actions = {
	[types.ADD_PORTFOLIO_STOCK]({ commit }, stock) {
		commit("addStock", stock);
	},

	[types.REMOVE_PORTFOLIO_STOCK]({ commit }, stockId) {
		commit("removeStock", stockId);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
};