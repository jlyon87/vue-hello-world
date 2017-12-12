<template>
	<div >
		<app-quotes-container></app-quotes-container>
	</div>
</template>

<script>
import QuotesContainer from "./components/quotes/QuotesContainer.vue";

export default {
	components: {
		"app-quotes-container": QuotesContainer
	}
}
</script>
