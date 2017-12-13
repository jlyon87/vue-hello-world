<template lang="html">
	<div>
		<div class="form-group">
			<label for="firstNameInput">First Name</label>
			<input class="form-control"
			type="text"
			v-model="firstName"
			@input="onInput"
			id="firstNameInput" >
		</div>

		<div class="form-group">
			<label for="lasNameInput">Last Name</label>
			<input class="form-control"
			type="text"
			v-model="lastName"
			@input="onInput"
			id="lasNameInput" >
		</div>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String
		}
	},

	data() {
		return {
			firstName: "",
			lastName: ""
		}
	},

	methods: {
		onInput() {
			this.$emit("input", this.firstName + " " + this.lastName);
		}
	}
}
</script>

<style lang="css">
</style>
