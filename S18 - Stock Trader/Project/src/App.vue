<template>
<v-app :dark="isDark">
	<v-content>
		<app-header @themeChanged="isDark = $event"></app-header>

		<transition name="slide-y-reverse-transition" mode="out-in">
			<router-view ></router-view>
		</transition>

	</v-content>
</v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
	data() {
		return {
			isDark: false
		};
	},

	components: {
		appHeader: Header
	},

	created() {
		this.$store.dispatch("loadStocks");
	}
}
</script>

<style>
</style>
