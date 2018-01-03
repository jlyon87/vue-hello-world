import Vue from 'vue'
import App from './App.vue'

import axios from "axios";

import router from './router'
import store from './store'

// axios Global defaults
axios.defaults.baseURL = "https://vue-axios-c0384.firebaseio.com";
axios.defaults.headers.common['Authorization'] = "boogers";
axios.defaults.headers.get['Accept'] = "application/json";

// Create an interceptor
const requestInterceptor = axios.interceptors.request.use(req => {
	console.log("request interceptor", req);
	return req;
});
const responseInterceptor = axios.interceptors.response.use(res => {
	console.log("response interceptor", res);
	return res;
});

// Deactivate an interceptor
//axios.interceptors.request.eject(requestInterceptor);
//axios.interceptors.response.eject(responseInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
