import Vue from 'vue';
import VueResource from "vue-resource";
import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root = "https://vue-resource-d0456.firebaseio.com/users.json";
Vue.http.interceptors.push((request, next) => {
	console.log("request interceptor", request);

	next(response => {
		console.log("response interceptor", response);
	});
});
new Vue({
	el: '#app',
	render: h => h(App)
});
