<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Built in Directives</h1>
				<p v-text="'Stuff'"></p>
				<p v-html="'<strong>Strong Text</strong>'"></p>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Custom Directives</h1>
				<p v-highlight:background.delayed="'red'">Color This Global</p>
				<p v-local-highlight:background.delayed.blink="{
					mainColor: 'red',
					secondColor: 'green',
					delay: 500}" >Color This Local</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	directives: {
		'local-highlight': {
			bind(el, binding, vnode) {
				const value = binding.value; // complex value object
				let delay = 0;
				if(binding.modifiers["delayed"]) { // modifiers
					delay = value.delay;
				}
				if(binding.modifiers["blink"]) {
					let currentColor = value.mainColor;

					setInterval(() => {
						if(currentColor === value.mainColor) { // arguments
							currentColor = value.secondColor;
						} else {
							currentColor = value.mainColor;
						}

						if(binding.arg === "background") { // arguments
							el.style.backgroundColor = currentColor; // value
						} else {
							el.style.color = currentColor;
						}
					}, delay);
				}

				setTimeout(() => {
					if(binding.arg === "background") { // arguments
						el.style.backgroundColor = binding.value; // value
					} else {
						el.style.color = binding.value;
					}
				}, delay);
			}
		}
	}
}
</script>