<template>
	<div class="container">
		<app-header></app-header>
		<hr>
		<div class="row">
			<app-servers
				:servers="servers"
				@clickedServer="server = $event"
			></app-servers>
			<app-server-details
				:server="server"
				@changedStatus="updateServer"
			></app-server-details>
		</div>
		<hr>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

export default {
	components: {
		"app-header": Header,
		"app-servers": Servers,
		'app-server-details': ServerDetails,
		'app-footer': Footer
	},
	data() {
		return {
			server: undefined,
			servers: [
				{id: 1, status: "Normal"},
				{id: 2, status: "Critical"},
				{id: 3, status: "Unknown"},
				{id: 4, status: "Normal"},
				{id: 5, status: "Normal"},
			]
		};
	},
	methods: {
		updateServer(server) {
			this.server.status = server.status;
		}
	}
}
</script>

<style>

</style>
