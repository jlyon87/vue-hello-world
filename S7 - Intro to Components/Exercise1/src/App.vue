<template>
<div class="container">

	<app-header></app-header>

	<hr>
	<div class="row">

		<app-server-list></app-server-list>
		<app-server-detail></app-server-detail>

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
		"app-server-list": ServerList,
		"app-server-detail": ServerDetail
	}
}
</script>
