<template>
	<label class="label-input" :class="cssClass">
		<slot name="label"></slot>
		<input :type="type" :placeholder="placeholder" v-model="value" @change="inputChanged" ref="input" />
	</label>
</template>
<script>
export default {
	name: "InputVue",
	props: [
		"type",
		"validate",
		"validateEver",
		"name",
		"placeholder",
		"cssClass",
		"defaultValue",
		"required"
	],
	data() {
		return {
			value: this.defaultValue,
			wrong: false
		};
	},
	mounted() {
		this.input = this.$refs.input;
	},
	methods: {
		inputChanged() {
			this.wrong = false;
			this.value = !this.validateEver
				? this.value
				: this.validateEver(this.value);
		}
	}
};
</script>