<template lang="html">
	<div class="content">
		<form >
			<div class="form-group">
				<label for="quoteInput">Quote</label>
				<textarea class="form-control"
					id="quoteInput"
					rows="5"
					cols="80"
					v-model="quoteText" ></textarea>
			</div>
			<div class="button">
				<button class="btn btn-primary"
					:disabled="totalQuotes > 9"
					@click="saveQuote"
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
		}
	},

	data() {
		return {
			quoteText: "stuff"
		}
	},

	methods: {
		saveQuote(event) {
			event.preventDefault();
			this.$emit("saveClicked", this.quoteText);
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
