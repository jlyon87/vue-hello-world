<template>
	<div class="col-xs-12 col-sm-6">
		<ul class="list-group">
			<li
				class="list-group-item"
				v-for="server in servers">

				<a @click="clickServer(server)">
					Server #{{ server.id }}

				</a>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	data() {
		return {
			servers: [
				{id: 1, status: "Normal"},
				{id: 2, status: "Critical"},
				{id: 3, status: "Unknown"},
				{id: 4, status: "Normal"},
				{id: 5, status: "Normal"},
			]
		}
	},
	methods: {
		clickServer(server) {
			this.$emit("clickedServer", server);
		}
	}
}
</script>

<style>

</style>
