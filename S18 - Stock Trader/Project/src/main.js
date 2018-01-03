import Vue from 'vue';

import Vuetify from "vuetify";
import '../node_modules/vuetify/dist/vuetify.min.css';

import VueRouter from "vue-router";
import { routes } from "./routes";

import { store } from "./store/store";

import App from './App.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: '#app',
	router,
	store,
  render: h => h(App)
});
