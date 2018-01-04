import Vue from 'vue';
import Vuex from 'vuex';

import axios from "./axios-auth";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		idToken: null,
		userId: null
	},
	mutations: {
		authUser(state, userData) {
			state.idToken = userData.token;
			state.userId = userData.userId;
		}
	},
	actions: {
		signup({ commit }, ) {
			axios.post("/signupNewUser?key=AIzaSyB6DEBF2oFZEpwampKJNRqI-Xk2GljM60M", {
				email: authData.email,
				password: authData.password,
				returnSecureToken: true
			})
				.then(response => {
					console.log("Logging in: ", response);
					commit("authUser", {
						token: response.data.idToken,
						userId: response.data.localId
					})
				})
				.catch(error => console.error("Error sending signup request: ", error.message));
		},

		login({ commit }, authData) {
			axios.post("/verifyPassword?key=AIzaSyB6DEBF2oFZEpwampKJNRqI-Xk2GljM60M", {
				email: authData.email,
				password: authData.password,
				returnSecureToken: true
			})
				.then(response => {
					console.log("Logging in: ", response);
					commit("authUser", {
						token: response.data.idToken,
						userId: response.data.localId
					})
				})
				.catch(error => console.error("Error sending signup request: ", error.message));
		}
	},
	getters: {

	}
});