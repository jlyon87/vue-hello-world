<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Animations</h1>
				<hr>
				<select class="form-control" v-model="alertAnimation">
					<option value="fade">Fade</option>
					<option value="slide">Slide</option>
				</select>
				<br>
				<button class="btn btn-primary" @click="show = !show" >Show Alert</button>
				<br><br>

				<transition :name="alertAnimation">
					<div class="alert alert-info" v-if="show">This is some info.</div>
				</transition>

				<transition :name="alertAnimation" >
					<div class="alert alert-info" v-if="show">This is some info.</div>
				</transition>

				<transition :name="alertAnimation" appear>
					<div class="alert alert-info" v-if="show">This is some info.</div>
				</transition>

				<transition
					appear
					enter-active-class="animated bounce"
					leave-active-class="animated shake" >
					<div class="alert alert-info" v-if="show">This is some info.</div>
				</transition>

				<transition :name="alertAnimation" mode="out-in">
					<div class="alert alert-info" v-if="show" key="info" >This is some info.</div>
					<div class="alert alert-warning" v-else key="warning" >This is some info.</div>
				</transition>

				<hr>

				<button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
				<br><br>
				<transition
					:css="false"
					@before-enter="beforeEnter"
					@enter="enter"
					@after-enter="afterEnter"
					@enter-cancelled="enterCancelled"

					@before-leave="beforeLeave"
					@leave="leave"
					@after-leave="afterLeave"
					@leave-cancelled="leaveCancelled">

					<div
						v-if="load"
						style="width: 100px; height: 100px; background-color: lightgreen;"></div>
				</transition>
				<hr>
				<button class="btn btn-primary" @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert': selectedComponent = 'app-success-alert'">Component Toggle</button>
				<br><br>
				<transition name="fade" mode="out-in">
					<component :is="selectedComponent"></component>
				</transition>

				<hr>

				<button class="btn btn-primary" @click="addItem">Add</button>
				<br><br>
				<transition-group name="slide" tag="ul" class="list-group">
					<li
						class="list-group-item"
						v-for="(number, i) in numbers"
						@click="removeItem(i)"
						style="cursor:pointer"
						:key="number">

						{{ number }}
					</li>
				</transition-group>
			</div>
		</div>
	</div>
</template>

<script>
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";

export default {
	data() {
		return {
			show: false,
			load: true,
			alertAnimation: "fade",
			selectedComponent: 'app-success-alert',
			numbers: [1, 2, 3, 4, 5]
		}
	},

	methods: {
		addItem() {
			const pos = Math.floor(Math.random() * this.numbers.length);
			this.numbers.splice(pos, 0, this.numbers.length + 1);
		},

		removeItem(index) {
			this.numbers.splice(index, 1);
		},

		beforeEnter(el) {
			console.log("beforeEnter", el);
		},

		enter(el, done) {
			console.log("Enter");
			done();
		},

		afterEnter(el) {
			console.log("afterEnter");
		},

		enterCancelled(el) {
			console.log("enterCancelled");
		},

		beforeLeave(el) {
			console.log("beforeLeave", el);
		},

		leave(el, done) {
			console.log("leave");
			done();
		},

		afterLeave(el) {
			console.log("afterLeave");
		},

		leaveCancelled(el) {
			console.log("leaveCancelled");
		}
	},

	components: {
		"app-danger-alert": DangerAlert,
		"app-success-alert": SuccessAlert
	}
}
</script>

<style>
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 1s;

	}

	.fade-leave {
		/* default is already opacity 1 */
	}

	.fade-leave-active {
		transition: opacity 1s;
		opacity: 0;
	}

	.slide-enter {
		/* transform: translateY(20px); */
		opacity: 0;
	}

	.slide-enter-active {
		animation: slide-in 1s ease-out forwards;
		transition: opacity .5s
	}

	.slide-leave {
		/* transform: translateY(0); */
	}

	.slide-leave-active {
		animation: slide-out 1s ease-out forwards;
		transition: opacity 1s;
		opacity: 0;
		position: absolute;
	}

	.slide-move {
		transition: transform 1s;
	}

	@keyframes slide-in {
		from {
			transform: translateY(20px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slide-out {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(20px);
		}
	}
</style>
