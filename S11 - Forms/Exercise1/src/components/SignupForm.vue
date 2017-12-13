<template lang="html">
<form >
	<app-fullname v-model="user.fullName"></app-fullname>

	<div class="form-group">
		<label for="emailInput">Email</label>
		<input class="form-control"
			type="email"
			v-model.lazy="user.email"
			id="emailInput" >
	</div>

	<div class="form-group">
		<label for="passwordInput">Password</label>
		<input class="form-control"
			type="password"
			v-model.lazy="user.password"
			id="passwordInput" >
	</div>

	<div class="form-group">
		<label for="storeDataInput">Store Data?</label>
		<label >
			<input type="radio"
				value="Yes"
				v-model="user.isStoreData" >Yes</label>
		<label >
			<input type="radio"
				value="No"
				v-model="user.isStoreData" >No</label>
	</div>

	<div class="form-group">
		<button class="btn btn-primary"
			@click.prevent="submitForm" >Submit</button>
	</div>
</form>
</template>

<!-- Exercise 1 -->
<!-- Create a Signup Form where you retrieve the following Information -->
<!-- Full Name (First Name + Last Name) -->
<!-- Mail -->
<!-- Password -->
<!-- Store Data? Yes/No -->

<script>
import FullName from "./FullName.vue";

export default {
	data() {
		return {
			user: {
				fullName: "",
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				isStoreData: "Yes"
			}
		}
	},

	methods: {
		submitForm() {
			this.$emit("signupSubmitted", this.user);
		}
	},

	components: {
		"app-fullname": FullName
	}
}
</script>
