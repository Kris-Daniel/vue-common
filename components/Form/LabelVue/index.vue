<template>
	<div class="label" :class="[cssClass, {wrong}]" @click="triggerInput" ref="label">
		<slot></slot>
	</div>
</template>

<script>
import FindParent from "../helpers/FindParent";
export default {
	name: "LabelVue",
	props: {
		cssClass: String,
		name: String,
		canChangeText: Boolean
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
	watch: {
		["parent.isRendered"]() {
			if (this.name) {
				this.attachedInput = this.parent.inputs.find(
					input => input.name == this.name
				);
				if (this.attachedInput) {
					this.attachedInput.attachedLabel = this;
				}
			}
		}
	},
	methods: {
		triggerInput($event) {
			if (this.attachedInput && this.attachedInput.trigger)
				this.attachedInput.trigger($event);
		},
		changeText(text) {
			if (this.canChangeText) this.$refs.label.innerHTML = text;
		}
	}
};
</script>