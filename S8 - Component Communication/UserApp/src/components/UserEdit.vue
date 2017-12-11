<template>
	<div class="component">
		<h3>You may edit the User here</h3>
		<p>Edit me!</p>
		<input type="text" name="" v-model="myName">
	</div>
</template>

<script>
export default {
	props: ["myName"]
}
</script>

<style scoped>
div {
	background-color: lightgreen;
}
</style>
