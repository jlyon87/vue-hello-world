import * as types from "../types";

const state = {
	funds: 1000
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
	[types.INCREMENT_FUNDS](state, stockPrice) {
		state.funds += stockPrice;
	},
	[types.DECREMENT_FUNDS](state, stockPrice) {
		state.funds -= stockPrice;
	}
};

const actions = {};

export default {
	state,
	getters,
	mutations,
	actions
};