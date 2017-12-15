import Vue from 'vue'
import App from './App.vue'

// Global Directive
Vue.directive('highlight', {
	bind(el, binding, vnode) {
		let delay = 0;
		if (binding.modifiers["delayed"]) { // modifiers
			delay = 3000;
		}

		setTimeout(() => {
			if (binding.arg === "background") { // arguments
				el.style.backgroundColor = binding.value; // value
			} else {
				el.style.color = binding.value;
			}
		}, delay);
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
