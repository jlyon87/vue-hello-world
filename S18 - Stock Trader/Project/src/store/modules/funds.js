import * as types from "../types";

const state = {
	funds: 100
};

const getters = {
	[types.GET_FUNDS]() {
		return state.funds;
	},
	[types.FUNDS_TOSTRING]() {
		return "$" + state.funds.toFixed(2);
	}
};

const mutations = {
	increment(state, stockPrice) {
		state.funds += stockPrice;
	},
	decrement(state, stockPrice) {
		state.funds -= stockPrice;
	}
};

const actions = {
	[types.INCREMENT_FUNDS]({ commit }, stockPrice) {
		commit("increment", stockPrice);
	},
	[types.DECREMENT_FUNDS]({ commit }, stockPrice) {
		commit("decrement", stockPrice);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
};