<template>
<div class="container">

	<div class="row">
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
			<app-signup-form v-if="!isSubmitted"
				@signupSubmitted="handleNewSignup" ></app-signup-form>
			<!-- Exercise 1 -->
			<!-- Create a Signup Form where you retrieve the following Information -->
			<!-- Full Name (First Name + Last Name) -->
			<!-- Mail -->
			<!-- Password -->
			<!-- Store Data? Yes/No -->

			<!-- Exercise 2 -->
			<!-- Only display the Form if it has NOT been submitted -->
			<!-- Display the Data Summary ONCE the Form HAS been submitted -->

			<!-- Exercise 3 -->
			<!-- Edit the Example from above and create a custom "Full Name" Control -->
			<!-- which still holds the First Name and Last Name Input Field -->
		</div>
	</div>

	<hr>
	<div class="row">
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
			<app-signup-summary v-if="isSubmitted"
				:user="user" ></app-signup-summary>
		</div>
	</div>
</div>
</template>

<script>
import SignupForm from "./components/SignupForm.vue";
import SignupSummary from "./components/SignupSummary.vue";

export default {
	data() {
		return {
			isSubmitted: false,
			user: undefined
		}
	},

	methods: {
		handleNewSignup(newUser) {
			console.log("newUser", newUser);
			this.user = newUser;
			this.isSubmitted = true;
		}
	},

	components: {
		"app-signup-form": SignupForm,
		"app-signup-summary": SignupSummary
	}
}
</script>
