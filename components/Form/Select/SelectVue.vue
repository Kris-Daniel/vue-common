<template>
	<div
		class="select"
		:class="[cssClass, {active, wrong}]"
		@click="toggleActive"
		v-click-outside="disableActive"
	>
		<div class="select_text" ref="text"></div>
		<div class="angle">
			<CarretDownSVG></CarretDownSVG>
		</div>
		<div class="options">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import InputsMixin from "../helpers/InputsMixin";
export default {
	name: "SelectVue",
	props: {
		name: String,
		required: Boolean,
		cssClass: String,
		placeholder: String
	},
	mixins: [InputsMixin],
	data() {
		return {
			selectedOption: null,
			active: false,
			wrong: false,
			options: []
		};
	},
	created() {
		this.inputFormKey = "SelectVue";
	},
	mounted() {
		this.options = this.$children;
		this.setSelectedText();
	},
	methods: {
		getValue() {
			let value = null;
			if (this.required && this.selectedOption === null) {
				this.wrong = true;
			} else {
				value = {
					[this.name]: this.selectedOption
				};
			}
			return value;
		},
		trigger($event) {
			$event.stopPropagation();
			this.toggleActive();
		},
		setOption(option) {
			this.wrong = false;
			this.selectedOption = option.name;
			this.$refs.text.innerHTML = option.value;
			this.setChildActive();
		},
		setChildActive() {
			this.options.forEach(option => {
				option.active = this.selectedOption == option.name;
			});
		},
		setSelectedText() {
			let selectedText = this.placeholder;
			this.options.forEach(option => {
				if (option.active) {
					this.selectedOption = !option.disabled ? option.name : null;
					selectedText = this.selectedOption
						? option.value
						: `<span style="opacity: 0.5">${option.value}</span>`;
				}
			});
			this.$refs.text.innerHTML = selectedText;
		},
		toggleActive() {
			this.active = !this.active;
			this.wrong = false;
		},
		disableActive() {
			this.active = false;
		}
	}
};
</script>

<style lang="less" scoped>
.select {
	position: relative;
	padding: 12px;
	border: 1px solid #c2c9dd;
	font-size: 13px;
	background: #fff;
	border-radius: 5px;
	box-sizing: border-box;
	cursor: pointer;
	user-select: none;
	&.active {
		border: 1px solid rgba(0, 206, 201, 1);
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
		z-index: 10;
	}
	&.wrong {
		border: 1px solid rgba(255, 109, 158, 1);
	}
}
.options {
	display: none;
	position: absolute;
	top: 100%;
	left: -1px;
	right: -1px;
}
.select.active .options {
	display: block;
}
.angle {
	position: absolute;
	right: 15px;
	top: 50%;
	transform: translateY(-50%);
	width: 8px;
	transition: 150ms all ease;
	svg {
		width: 8px;
	}
}
.select.active .angle {
	transform: translateY(-50%) rotate(180deg);
}
</style>

<style lang="less">
.select svg {
	height: 1em;
	width: 1em;
	line-height: 1em;
	display: inline-block;
	vertical-align: middle;
}
</style>