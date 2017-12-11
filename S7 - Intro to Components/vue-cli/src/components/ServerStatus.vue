<template >
	<div > <!-- All components must have a div container -->
		<button type="button" @click="changeStatus">Change Status</button>
		<p>Server Status: {{ status }}</p>
		<hr>
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
};
</script>
