<template lang="html">
	<div >
		<h1>Quotes Added</h1>
		<div class="progress">
			<div class="progress-bar"
				role="progressbar"
				:aria-valuenow="totalQuotes"
				aria-valuemax="10"
				:style="progressBarWidth">

				{{ totalQuotes }}/10
				<span class="sr-only">{{ totalQuotes }}/10</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		totalQuotes: {
			type: Number,
			required: true
		}
	},

	computed: {
		progressBarWidth() {
			return {"width": (this.totalQuotes * 10) + '%'};
		}
	}
}
</script>
