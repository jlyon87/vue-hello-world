<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Http</h1>
				<div class="form-group">
					<label>UserName</label>
					<input type="text" class="form-control" v-model.lazy="user.name">
				</div>

				<div class="form-group">
					<label>Mail</label>
					<input type="text" class="form-control" v-model.lazy="user.email">
				</div>

				<button class="btn btn-primary" @click.prevent="submit">Submit</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: "",
				email: ""
			}
		}
	},

	methods: {
		submit() {
			console.log("User", this.user);
			this.$http.post("https://vue-resource-d0456.firebaseio.com/users.json", this.user)
				.then(res => {
					console.log(res)
				}, err => {
					console.error(err);
				});
		}
	}
}
</script>

<style>
</style>
