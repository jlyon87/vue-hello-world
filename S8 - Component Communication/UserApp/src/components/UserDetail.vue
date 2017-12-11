<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>User Name: {{ userName }}</p>
		<p>User Age: {{ userAge }}</p>
		<p>Reversed Name: {{ switchName() }}</p>
		<button @click="resetName" >Reset Name</button>
		<button @click="resetFn" >Reset Name</button>
	</div>
</template>

<script>
import { eventBus } from "../main";

export default {
	props: {
		userName: {
			type: String,
			required: true
		},
		userAge: {
			type: Number,
			required: true
		},
		resetFn: Function
	},
	methods: {
		switchName() {
			return this.userName.split("").reverse().join("");
		},
		resetName() {
			this.$emit("nameWasReset", "Justin");
		}
	},
	created() {
		eventBus.$on("ageChanged", age =>  this.userAge = age );
	}
}
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
