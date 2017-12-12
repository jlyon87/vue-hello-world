<template>
<div class="container">
<form>
	<div class="row">
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
			<h1>File a Complaint</h1>
			<hr>
			<div class="form-group">
				<label for="email">Mail</label>
				<input
				type="text"
				id="email"
				class="form-control"
				:value="user.email"
				@change="user.email = $event.target.value" >
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input
				type="password"
				id="password"
				class="form-control"
				v-model.lazy="user.password">
			</div>
			<div class="form-group">
				<label for="age">Age</label>
				<input
				type="number"
				id="age"
				class="form-control"
				v-model.lazy="user.age">
			</div>

		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
			<label for="message">Message</label><br>
			<!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
			<textarea
			id="message"
			rows="5"
			class="form-control"
			v-model.lazy="message" ></textarea>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
			<div class="form-group">
				<label for="sendmail">
					<input
					type="checkbox"
					id="sendmail"
					value="SendMail"
					v-model="mailBoxes"> Send Mail
				</label>
				<label for="sendInfomail">
					<input
					type="checkbox"
					id="sendInfomail"
					value="SendInfoMail"
					v-model="mailBoxes"> Send Infomail
				</label>
			</div>

		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
			<label for="male">
				<input
				type="radio"
				id="male"
				value="Male"
				v-model="gender"> Male
			</label>
			<label for="female">
				<input
				type="radio"
				id="female"
				value="Female"
				v-model="gender"> Female
			</label>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
			<label for="priority">Priority</label>
			<select
				id="priority"
				class="form-control"
				v-model="priority">

				<option v-for="opt in priorityOptions"
					:value="opt.value" :selected="opt.value === 'Low'" >{{ opt.label }}</option>
				</select>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
			<app-switch v-model="dataSwitch"></app-switch>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
			<button
				class="btn btn-primary"
				@click.prevent="submitted">Submit!
			</button>
		</div>
	</div>
</form>
<hr>
<div class="row">
	<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
		<div class="panel panel-default" v-if="isSubmitted">
			<div class="panel-heading">
				<h4>Your Data</h4>
			</div>
			<div class="panel-body">
				<p>Mail: {{ user.email }}</p>
				<p>Password: {{ user.password }}</p>
				<p>Age: {{ user.age }}</p>
				<p style="white-space: pre;">Message: {{ message }}</p>
				<p><strong>Send Mail?</strong></p>
				<ul>
					<li v-for="item in mailBoxes">{{ item }}</li>
				</ul>
				<p>Gender: {{ gender }}</p>
				<p>Priority: {{ priority }}</p>
				<p>Switched: {{ dataSwitch }}</p>
			</div>
		</div>
	</div>
</div>
</div>
</template>

<script>
import Switch from "./Switch.vue";

export default {
	data() {
		return {
			user: {
				email: "",
				password: "",
				age: 30
			},
			message: "",
			mailBoxes: [],
			gender: "Male",
			priority: "Medium",
			priorityOptions: [
				{label: "High", value: "High"},
				{label: "Medium", value: "Medium"},
				{label: "Low", value: "Low"}
			],
			dataSwitch: true,
			isSubmitted: false
		}
	},

	methods: {
		submitted() {
			this.isSubmitted = true;
		}
	},

	components: {
		"app-switch": Switch
	}
}
</script>

<style>

</style>
