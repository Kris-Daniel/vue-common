<template>
	<input
		:type="type"
		:name="name"
		:id="id"
		class="input"
		:class="[cssClass, {wrong}]"
		:placeholder="placeholder"
		v-model="value"
		@change="inputChanged"
		@click="disableWrong"
	/>
</template>
<script>
import InputsMixin from "./helpers/InputsMixin";
export default {
	name: "InputVue",
	props: [
		"type",
		"name",
		"id",
		"cssClass",
		"placeholder",
		"defaultValue",
		"validate",
		"validateEver",
		"required"
	],
	mixins: [InputsMixin],
	data() {
		return {
			value: this.defaultValue,
			wrong: false
		};
	},
	created() {
		this.inputFormKey = "InputVue";
	},
	methods: {
		getValue() {
			let value = null;
			if (this.required && !this.validate(this.value)) {
				this.wrong = true;
			} else {
				value = {
					[this.name]: this.value
				};
			}
			return value;
		},
		disableWrong() {
			this.wrong = false;
		},
		inputChanged() {
			this.wrong = false;
			this.value = !this.validateEver
				? this.value
				: this.validateEver(this.value);
		}
	}
};
</script>

<style lang="less" scoped>
.input.wrong{
	border: 1px solid rgba(255, 109, 158, 1);
}
</style>