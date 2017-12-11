<template>
	<div class="col-xs-12 col-sm-6">
		<div v-if="server">
			<p>Server #{{ server.id }}</p>
			<p>Status: {{ server.status }}</p>
			<hr>
			<button @click="statusUpdate">Update to Normal</button>
		</div>
		<div v-else>
			Select a server.
		</div>
	</div>

</template>

<script>
export default {
	props: {
		server: {
			type: [Object, undefined]
		}
	},
	methods: {
		statusUpdate() {
			this.$emit("changedStatus", {
				id: this.server.id,
				status: "Normal"
			});
		}
	}
}
</script>

<style>

</style>
