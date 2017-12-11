<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>Use Name: {{ switchName() }}</p>
		<button @click="resetName" >Reset Name</button>
		<button @click="resetFn" >Reset Name</button>
	</div>
</template>

<script>
export default {
	props: {
		myName: {
			type: String,
			required: true
		},
		resetFn: Function
	},
	methods: {
		switchName() {
			return this.myName.split("").reverse().join("");
		},
		resetName() {
			this.$emit("nameWasReset", "Justin");
		}
	}
}
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
