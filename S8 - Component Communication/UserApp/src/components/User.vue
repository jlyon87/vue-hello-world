<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm an awesome User!</p>
		<button @click="changeMyName">Change My Name</button>
		<p>Name is: {{ name }}</p>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail
					:userName="name"
					:userAge="age"
					@nameWasReset="name = $event"
					:resetFn="resetName" ></app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit
					:userName="name"
					:userAge="age"
					@ageChanged="age = $event" ></app-user-edit>
			</div>
		</div>
	</div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
	components: {
		appUserDetail: UserDetail,
		appUserEdit: UserEdit
	},
	data() {
		return {
			name: "Justin",
			age: 30
		}
	},
	methods: {
		changeMyName() {
			this.name = "Mina";
		},
		resetName() {
			this.name = "Justin";
		}
	}
}
</script>

<style scoped>
div {
	background-color: lightblue;
}
</style>
