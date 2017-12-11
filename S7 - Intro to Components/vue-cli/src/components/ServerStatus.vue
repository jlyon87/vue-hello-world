<template >
	<div > <!-- All components must have a div container -->
		<button type="button" @click="changeStatus">Change Status</button>
		<hr>
		<p>Server Status: {{ status }}</p>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			status: "Critical"
		}
	},
	methods: {
		changeStatus() {
			this.status = "Changed";
		}
	}
}
</script>
