<template>
<div class="container">

	<app-header></app-header>

	<hr>
	<div class="row">

		<app-serverList></app-serverList>
		<app-serverDetail></app-serverDetail>

	</div>
	<hr>

	<app-footer></app-footer>

</div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import ServerList from "./components/server/ServerList.vue";
import ServerDetail from "./components/server/ServerDetail.vue";

export default {
	components: {
		"app-header": Header,
		"app-footer": Footer,
		"app-serverList": ServerList,
		"app-serverDetail": ServerDetail
	}
}
</script>
