<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<button @click="selectedComponent = 'app-quote'">Quote</button>
				<button @click="selectedComponent = 'app-author'">Author</button>
				<button @click="selectedComponent = 'app-new'">New</button>
				{{ selectedComponent }}
				<hr>
				<keep-alive>
					<component :is="selectedComponent">
						default content
					</component>
				</keep-alive>
				<!-- <app-quote >
					<h2 slot="title" >{{ quoteTitle }}</h2>
					<p >A wonderful Quote</p>
				</app-quote> -->
			</div>
		</div>
	</div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
	components: {
		"app-quote": Quote,
		"app-author": Author,
		"app-new": New
	},
	data() {
		return {
			quoteTitle: "The Quote",
			selectedComponent: "app-quote"
		}
	}
}
</script>

<style scoped>

</style>
