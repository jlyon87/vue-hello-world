<template>
<v-app dark>
	<v-content>
		<app-header></app-header>

		<transition name="slide-y-reverse-transition" mode="out-in">
			<router-view ></router-view>
		</transition>

	</v-content>
</v-app>
</template>

<script>
import * as types from "./store/types";

import Header from "./components/Header.vue";

export default {
	components: {
		appHeader: Header
	},

	created() {
		this.$store.dispatch(types.LOAD_PUBLIC_STOCKS);
	}
}
</script>

<style>
</style>
