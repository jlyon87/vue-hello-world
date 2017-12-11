<template>
	<div class="col-xs-12 col-sm-6">
		<div v-if="server">
			<p>Server #{{ server.id }}</p>
			<p>Status: {{ server.status }}</p>
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
	}
}
</script>

<style>

</style>
