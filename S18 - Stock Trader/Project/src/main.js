import Vue from 'vue';
import Vuetify from "vuetify";
import '../node_modules/vuetify/dist/vuetify.min.css';

import VueRouter from "vue-router";
import { routes } from "./routes";

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
  render: h => h(App)
});
