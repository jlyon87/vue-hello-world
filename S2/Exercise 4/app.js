new Vue({
	el: '#app',
	data: {
		isHighlight: true,
		color: "green",

		classInput: "highlight",
		isClassInput: false,

		styleInput: "",

		progress: 0,
		progressStyle: {
			width: '0px',
			height: '25px'
		}
	},

	computed: {
		computedProgress: function() {
			console.log("computing");
			return {
				width: this.progress + "px",
				height: "25px"
			}
		}
	},
	methods: {
		startEffect: function() {
			var vm = this;
			setInterval(function() {
				vm.isHighlight = !vm.isHighlight;
			}, 2000);
		},

		startProgress: function() {
			console.log("clicked");
			var vm = this;

			var interval = setInterval(function() {
				console.log("intervaling");
				vm.progress += 20;

				if(vm.progress === 100) {
					console.log("done");
					clearInterval(interval);
				}
			}, 2000);
		}
	}
});
