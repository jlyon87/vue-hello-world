import * as types from "../types";

const state = {
	stocks: [
		{ name: "BMW", price: 110, id: 1 },
		{ name: "Google", price: 80, id: 2 },
		{ name: "Apple", price: 20, id: 3 },
		{ name: "Twitter", price: 8, id: 4 },
	]
};

const getters = {
	[types.GET_PUBLIC_STOCKS]() {
		return state.stocks;
	}
};

const mutations = {};

const actions = {};

export default {
	state,
	getters,
	mutations,
	actions
};