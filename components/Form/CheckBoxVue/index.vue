<template>
	<div :id="id" class="checkbox" :class="[cssClass, {wrong, checked: isChecked}]" @click="toggleChecked">
		<div class="checkbox_icon" v-show="isChecked">
			<component :is="icon"></component>
		</div>
	</div>
</template>

<script>
import InputsMixin from "../helpers/InputsMixin";
export default {
	name: "CheckBoxVue",
	props: {
		name: String,
		id: String,
		cssClass: String,
		checked: Boolean,
		required: Boolean,
		icon: {
            type: String,
            default: "CheckSVG"
        }
    },
    mixins: [InputsMixin],
	data() {
		return {
			wrong: false,
			isChecked: this.checked
		};
    },
    created() {
		this.inputFormKey = "CheckBoxVue";
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
		}
	}
};
</script>
<style lang="less" scoped>
.checkbox {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	width: 15px;
	height: 15px;
	font-size: 15px;
	border: 2px solid #77757f;
}
.checkbox.checked {
	border: 2px solid rgba(0, 206, 201, 1);
}
.checkbox.wrong {
	border: 2px solid rgba(255, 109, 158, 1);
}

.checkbox > .checkbox_icon {
	position: absolute;
	top: 0;
	left: 0;
    top: -4px;
    left: 2px;
    width: 18px;
    svg{
        width: 18px;
    }
}
</style>