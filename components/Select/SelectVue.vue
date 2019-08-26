<template>
	<div
		class="select"
		:class="[cssClass, {active, wrong}]"
		@click="toggleActive"
		v-click-outside="disableActive"
	>
		<span v-html="selectedText"></span>
		<div class="angle">
			<CarretDownSVG></CarretDownSVG>
		</div>
		<div class="options">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "SelectVue",
	props: {
		required: Boolean,
		cssClass: String,
		placeholder: String,
	},
	data() {
		return {
			name: false,
			selectedText: this.placeholder,
			active: false,
			wrong: false,
			options: []
		};
	},
	created() {
		this.inputFormKey = "Select";
		this.$emit("getInput", this);
	},
	mounted() {
		this.options = this.$children;
		this.setSelectedText();
	},
	methods: {
		setOption(option) {
			this.name = option.name;
			this.selectedText = option.value;
			this.setChildActive();
		},
		setChildActive() {
			this.options.forEach(option => {
				option.active = this.name == option.name;
			});
		},
		setSelectedText() {
			this.options.forEach(option => {
				if (option.active) {
					this.name = !option.disabled ? option.name : false;
					this.selectedText = this.name ? option.value : `<span style="opacity: 0.5">${option.value}</span>`;
				}
			});
		},
		toggleActive() {
			this.active = !this.active;
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
	width: 10px;
	transition: 150ms all ease;
	svg {
		width: 10px;
	}
}
.select.active .angle {
	transform: translateY(-50%) rotate(180deg);
}
</style>