<template lang="html">
	<div>
		<div :class="{active: value}"
			@click="switched(true)"
			id="on" >On</div>
		<div :class="{active: !value}"
			@click="switched(false)"
			id="off" >Off</div>
	</div>
</template>

<script>
export default {

	props: ["value"],

	methods: {
		switched(isOn) {
			this.$emit("input", isOn);
		}
	}
}
</script>

<style lang="css" scoped>
#on, #off {
	width: 40px;
	height: 20px;
	background-color: lightgray;
	padding: 2px;
	display: inline-block;
	margin: 10px -2px;
	box-sizing: content-box;
	cursor: pointer;
	text-align: center;
}

#on:hover, #on.active {
	background-color: lightgreen;
}

#off:hover, #off.active {
	background-color: lightcoral;
}
</style>
