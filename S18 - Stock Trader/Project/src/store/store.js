import Vue from "vue";
import Vuex from "vuex";

import funds from "./modules/funds";
import portfolio from "./modules/portfolio";
import stocks from "./modules/stocks";

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		funds,
		portfolio,
		stocks
	}
});