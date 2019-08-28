<template>
	<textarea
		:name="name"
		:id="id"
		class="input"
		:class="[cssClass, {wrong}]"
		:placeholder="placeholder"
		v-model="value"
		@input="inputChanged"
		@click="disableWrong"
		ref="input"
	/>
</template>
<script>
import InputsMixin from "../helpers/InputsMixin";
export default {
	name: "TextareaVue",
	props: {
		name: String,
		id: String,
		cssClass: String,
		placeholder: String,
		defaultValue: {
			type: String,
			default: ""
		},
		validate: Function,
		validateEver: Function,
		required: Boolean
	},
	mixins: [InputsMixin],
	data() {
		return {
			value: this.defaultValue,
			wrong: false
		};
	},
	created() {
		this.inputFormKey = "TextareaVue";
	},
	methods: {
		getValue() {
			let value = null;
			if (
				this.required &&
				(this.value == "" ||
					(this.validate && !this.validate(this.value)))
			) {
				this.wrong = true;
			} else {
				value = {
					[this.name]: this.value
				};
			}
			return value;
		},
		trigger() {
			this.$refs.input.focus();
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
.input.wrong {
	border: 1px solid rgba(255, 109, 158, 1);
}
</style>