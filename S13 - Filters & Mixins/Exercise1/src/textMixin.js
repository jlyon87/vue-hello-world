export const textMixin = {
	data() {
		return {
			mixinText: "Hello!"
		}
	},
	computed: {
		mixinReverseText() {
			return this.mixinText.split("").reverse().join("");
		},

		mixinTextLength() {
			return this.mixinText + " (" + this.mixinText.length + ")";
		}
	}
};
