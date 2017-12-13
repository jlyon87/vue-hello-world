<template lang="html">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4>Your Data</h4>
		</div>
		<div class="panel-body">
			<p>Full Name: {{ user.fullName }}</p>
			<p>Mail: {{ user.email }}</p>
			<p>Password: {{ user.password }}</p>
			<p>Store in Database?: {{ user.isStoreData }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		user: {
			type: Object
		}
	}
}
</script>

<style lang="css">
</style>
