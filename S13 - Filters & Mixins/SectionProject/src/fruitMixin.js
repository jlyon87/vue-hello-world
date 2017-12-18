export const fruitMixin = {
	data() {
		return {
			fruitText: "",
			fruits: [
				"Apple",
				"Banana",
				"Mango",
				"Melon"
			]
		}
	},
	computed: {
		filteredFruits() {
			return this.fruits.filter(
				fruit => fruit.match(this.fruitText));
		}
	},
	created() {
		console.log("fruitMixin created");
	}
};
