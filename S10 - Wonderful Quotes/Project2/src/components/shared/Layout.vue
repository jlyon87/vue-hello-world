<template lang="html">
	<div class="container">
		<div class="row">
			<div class="header col-xs-12">
				<slot name="header">
					Header
				</slot>
			</div>
		</div>
		<div class="row">
			<div class="content col-xs-12">
				<slot ></slot>
			</div>
		</div>
		<div class="row">
			<div class="footer col-xs-12">
				<slot name="footer">
					Footer
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
div.header, div.content, div.footer {
	padding: 1em;
	margin: .5em auto;
}

div.header {}

div.content {}

div.footer {}
</style>
