import Vue from 'vue';
import Vuex from 'vuex';

import router from "./router";

import axios from "./axios-auth";
import globalAxios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		idToken: null,
		userId: null,
		user: null
	},

	mutations: {
		authUser(state, userData) {
			state.idToken = userData.token;
			state.userId = userData.userId;
		},
		storeUser(state, user) {
			state.user = user;
		},

		clearAuthData(state) {
			state.idToken = null;
			state.userId = null;
			state.user = null;
		}
	},

	actions: {
		tryAutoLogin({ commit }) {
			const token = localStorage.getItem("token");
			if(!token) {
				return;
			}

			const expirationDate = localStorage.getItem("expirationDate");
			const now = new Date();

			if(now >= expirationDate) {
				return;
			}

			const userId = localStorage.getItem("userId");

			commit("authUser", {token, userId});
		},

		setLogoutTimer({ dispatch }, expirationTime) {
			setTimeout(() => {
				dispatch("logout");
			}, expirationTime * 1000)
		},

		signup({ commit, dispatch }, authData) {
			axios.post("/signupNewUser?key=AIzaSyB6DEBF2oFZEpwampKJNRqI-Xk2GljM60M", {
				email: authData.email,
				password: authData.password,
				returnSecureToken: true
			})
				.then(response => {
					console.log("Signing up and Logging in: ", response);
					commit("authUser", {
						token: response.data.idToken,
						userId: response.data.localId
					});

					const now = new Date();
					const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);
					localStorage.setItem("token", response.data.idToken);
					localStorage.setItem("expirationDate", expirationDate);
					localStorage.setItem("userId", response.data.localId);

					dispatch("storeUser", authData);
					dispatch("setLogoutTimer", res.data.expiresIn);
					router.replace("/dashboard");
				})
				.catch(error => console.error("Error sending signup request: ", error.message));
		},

		login({ commit, dispatch }, authData) {
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
					});

					const now = new Date();
					const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);
					localStorage.setItem("token", response.data.idToken);
					localStorage.setItem("expirationDate", expirationDate);
					localStorage.setItem("userId", response.data.localId);

					dispatch("setLogoutTimer", response.data.expiresIn);
					router.replace("/dashboard");
				})
				.catch(error => console.error("Error sending signup request: ", error.message));
		},

		logout({ commit }) {
			commit("clearAuthData");
			localStorage.removeItem("token");
			localStorage.removeItem("expirationDate");
			localStorage.removeItem("userId");
			router.replace("/signin");
		},

		storeUser({ commit, state }, userData) {
			if(!state.idToken) {
				return;
			}

			globalAxios.post("/users.json" + "?auth=" + state.idToken, userData)
				.then(response => console.log("storing userData: ", response))
				.catch(error => console.error(error.message));
		},

		fetchUser({ commit, state }) {
			if (!state.idToken) {
				return;
			}

			globalAxios.get("/users.json" + "?auth=" + state.idToken)
				.then(response => {
					console.log("fetching users: ", response);
					const data = response.data;
					const users = [];
					for(let key in data) {
						const user = data[key];
						user.id = key;
						users.push(user);
					}
					console.log("users", users);
					commit("storeUser", users[0]);
				})
				.catch(error => console.error("Error sending signup request: ", error.message));
		}
	},

	getters: {
		user(state) {
			return state.user;
		},

		isAuthenticated(state) {
			return state.idToken !== null;
		}
	}
});