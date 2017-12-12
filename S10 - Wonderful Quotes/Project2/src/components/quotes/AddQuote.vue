<template lang="html">
	<div class="content">
		<form >
			<div class="form-group">
				<label for="quoteInput">Quote</label>
				<textarea class="form-control"
					id="quoteInput"
					rows="5"
					cols="80"
					placeholder="Enter a quote here..."
					v-model="quoteText"
					@keyup.enter.prevent="saveQuote"
					 ></textarea>
			</div>
			<div class="button">
				<button class="btn btn-primary"
					:disabled="totalQuotes >= maxQuotes"
					@click.prevent="saveQuote"
					id="saveBtn">Add Quote</button>
			</div>
		</form>
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

	data() {
		return {
			quoteText: ""
		}
	},

	methods: {
		saveQuote(event) {

			if(this.isValidText() && this.totalQuotes < this.maxQuotes) {
				this.$emit("saveClicked", this.quoteText.trim());
				this.quoteText = "";

			} else if(this.totalQuotes >= this.maxQuotes) {
				alert("Too many quotes! Delete some to make room.");
			}
		},

		isValidText() {
			return !this.quoteText || this.quoteText.trim().length > 0;
		}
	}
}
</script>

<style lang="css" scoped>
form {
	padding: .5em 20%;
}
div.button {
	text-align: center;
}
</style>
