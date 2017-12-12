<template lang="html">
	<div class="row">
		<div class="col-xs-12 col-s-6 col-md-3"
			v-for="quote in quotes">
			<app-quote-card :quote="quote"
				@quoteClicked="bubbleQuoteClicked"></app-quote-card>
		</div>
	</div>
</template>

<script>
import QuoteCard from "./QuoteCard.vue";

export default {
	props: {
		quotes: Array
	},

	methods: {
		bubbleQuoteClicked(quote) {
			this.$emit("quoteClicked", quote);
		}
	},

	components: {
		"app-quote-card": QuoteCard
	}
}
</script>
