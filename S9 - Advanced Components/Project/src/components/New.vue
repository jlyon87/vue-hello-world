<template >
	<div >
		<h3>New Quote</h3>
		<button @click="counter++">Counter</button>
		<p>{{ counter }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0
		}
	},
	destroyed() {
		console.log("New destroyed");
	},
	deactivated() {
		console.log("Leaving New");
	},
	activated() {
		console.log("Arriving on New");
	}
}
</script>
