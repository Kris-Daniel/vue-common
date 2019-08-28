<template>
	<div class="ios-switcher" :class="[cssClass, {wrong, active: isChecked}]" @click="toggleChecked">
		<div class="ios-switcher_lever"></div>
	</div>
</template>

<script>
import InputsMixin from "../helpers/InputsMixin";
export default {
	name: "IosSwitcher",
	props: {
		name: String,
		cssClass: String,
		checked: Boolean,
		required: Boolean,
		textOn: String,
		textOff: String
	},
	mixins: [InputsMixin],
	data() {
		return {
			wrong: false,
			isChecked: this.checked,
			attachedLabel: false
		};
	},
	watch: {
		attachedLabel() {
			this.changeLabelText();
		}
	},
	created() {
		this.inputFormKey = "IosSwitcher";
	},
	methods: {
		getValue() {
			let value = null;
			if (this.required && !this.isChecked) {
				this.wrong = true;
			} else {
				value = {
					[this.name]: this.isChecked
				};
			}
			return value;
		},
		trigger() {
			this.toggleChecked();
		},
		toggleChecked() {
			this.isChecked = !this.isChecked;
			this.wrong = false;
			this.changeLabelText();
		},
		changeLabelText() {
			if (this.attachedLabel) {
				this.attachedLabel.changeText(
					this.isChecked ? this.textOn : this.textOff
				);
			}
		}
	}
};
</script>

<style lang="less" scoped>
.ios-switcher {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	width: 31px;
    height: 14px;
    font-size: 14px;
	border: 1px solid #e3e3e3;
	border-radius: 14px;
	background: #ffffff;
	cursor: pointer;
	transition: 200ms all ease-in-out;
	&.active {
		border: 1px solid #00cec9;
		background: #00cec9;
	}
}
.ios-switcher_lever {
	position: absolute;
	left: 0;
	top: 0;
	height: 14px;
	width: 14px;
	border: 1px solid #e3e3e3;
	margin: -1px;
	border-radius: 14px;
	background: #ffffff;
	transition: 200ms all ease-in-out;
}
.ios-switcher.active .ios-switcher_lever {
    left: 17px;
    border: 1px solid #00cec9;
    box-shadow: none;
}
</style>