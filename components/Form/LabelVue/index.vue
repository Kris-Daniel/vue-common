<template>
	<div class="label" :class="[cssClass, {wrong}]" @click="triggerInput">
		<slot></slot>
	</div>
</template>

<script>
import FindParent from "../helpers/FindParent";
export default {
	name: "LabelVue",
	props: {
		cssClass: String,
		name: String
	},
	data() {
		return {
			parent: FindParent.getParent(this, "formKey"),
			attachedInput: false
		};
	},
	computed: {
		wrong() {
			return this.attachedInput ? this.attachedInput.wrong : false;
		}
	},
	created() {
		if (this.parent && this.name) {
			this.attachedInput = this.parent.inputs.find(
				input => input.name == this.name
			);
		}
	},
	methods: {
		triggerInput($event) {
			if (this.attachedInput && this.attachedInput.trigger)
				this.attachedInput.trigger($event);
		}
	}
};
</script>