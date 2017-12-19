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
				<hr>
				<button class="btn btn-primary" @click.prevent="fetchData">Get Data</button>
				<br><br>
				<ul class="list-group">
					<li class="list-group-item" v-for="u in users">
						{{ u.name }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
const FIREBASE_URL = "";
export default {
	data() {
		return {
			user: {
				name: "",
				email: ""
			},
			users: []
		}
	},

	methods: {
		submit() {
			console.log("User", this.user);
			this.$http.post(FIREBASE_URL, this.user)
				.then(res => {
					console.log(res)
				}, err => {
					console.error(err);
				});
		},

		fetchData() {
			this.$http.get(FIREBASE_URL)
				.then(res => {
					return res.json();
				})
				.then(data => {
					console.log("data", data);
					const resultArray = [];
					for(let key in data) {
						resultArray.push(data[key]);
					}
					console.log("resultArray", resultArray);
					this.users = resultArray;
				});
		}
	}
}
</script>

<style>
</style>
