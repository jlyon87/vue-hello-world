<template lang="html">
	<div class="panel panel-default">
		<div class="panel-body"
			@click="deleteQuote">
			{{ quote.message }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		quote: Object
	},

	methods: {
		deleteQuote() {
			this.$emit("quoteClicked", this.quote);
		}
	}
}
</script>

<style lang="css">
div.panel-body {
	font-family: 'Arizonia', cursive;
	font-size: 2em;
}

div.panel-body:hover {
	cursor: pointer;
	background-color: lightcoral;
}
</style>
