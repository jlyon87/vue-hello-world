<template lang="html">
	<div >
		<h1>Quotes Added</h1>
		<div class="progress">
			<div class="progress-bar"
				role="progressbar"
				:aria-valuenow="totalQuotes"
				:aria-valuemax="maxQuotes"
				:style="progressBarWidth">

				{{ totalQuotes }} / {{ maxQuotes }}
				<span class="sr-only">{{ totalQuotes }} / {{ maxQuotes }}</span>
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
		},
		maxQuotes: {
			type: Number,
			default: () => 10
		}
	},

	computed: {
		progressBarWidth() {
			return {"width": (this.totalQuotes / this.maxQuotes * 100) + '%'};
		}
	}
}
</script>
