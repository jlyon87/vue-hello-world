<template>
	<div class="col-xs-12 col-sm-6">
		<ul class="list-group">
			<li
				class="list-group-item"
				v-for="server in servers">

				<a @click="clickServer(server)" style="cursor: pointer;">
					Server #{{ server.id }}

				</a>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	props: {
		servers: {
			type: Array,
			required: true
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
