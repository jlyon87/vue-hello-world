import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowerCase', value => {
	return value.toLowerCase();
});

Vue.mixin({
	created() {
		// Global mixins are created in all vue instances and components.
		console.log("Global Mixin - Created hook");
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
