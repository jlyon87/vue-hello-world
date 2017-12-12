<template>
	<div >
		<app-layout>

			<div slot="header">
				<app-quote-bar
					:totalQuotes="quotes.length" ></app-quote-bar>
			</div>

			<div class="row">
				<div class="col-xs-12">
					<app-add-quote
						:totalQuotes="quotes.length"
						@saveClicked="saveQuote" ></app-add-quote>
				</div>

				<div class="col-xs-12">
					<app-quote-grid :quotes="quotes"
						@quoteClicked="deleteQuote"></app-quote-grid>
				</div>
			</div>

			<div slot="footer">
				<app-footer></app-footer>
			</div>

		</app-layout>
	</div>
</template>

<script>
import Layout from "../shared/Layout.vue";
import Footer from "../shared/Footer.vue";

import QuoteBar from "./QuoteBar.vue";
import AddQuote from "./AddQuote.vue";
import QuoteGrid from "./QuoteGrid.vue";

export default {
	data() {
		return {
			quotes: [
				{id: 0, message: "quote 1"},
				{id: 1, message: "quote 2"},
				{id: 2, message: "quote 3"},
				{id: 3, message: "quote 4"},
				{id: 4, message: "quote 5"},
			]
		}
	},

	methods: {
		saveQuote(quoteText) {
			const newQuote = {
				id: this.quotes.length,
				message: quoteText
			};
			this.quotes.push(newQuote);
		},

		deleteQuote(quote) {
			const quoteIndex = this.quotes.indexOf(quote);
			this.quotes.splice(quoteIndex, 1);
		}
	},

	components: {
		"app-layout": Layout,
		"app-footer": Footer,

		"app-quote-bar": QuoteBar,
		"app-add-quote": AddQuote,
		"app-quote-grid": QuoteGrid
	}
}
</script>
