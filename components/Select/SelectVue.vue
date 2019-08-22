<template>
	<div
		class="select"
		:class="[cssClass, {active, wrong}]"
		@click="toggleActive"
		v-click-outside="disableActive"
	>
		{{selectedText}}
		<div class="angle">
			<slot name="angle">
				<CarretDownSVG></CarretDownSVG>
			</slot>
		</div>
		<div class="options">
			<div
				class="option"
				@click="selectOption(key)"
				:class="{selected: selectedText == key}"
				v-for="(option, key) in options"
				:key="key"
				:name="key"
			>{{option}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Select",
	props: {
		required: Boolean,
		forFalidate: Boolean,
		defaultKey: String,
		placeholder: String,
		cssClass: String,
		name: String,
		options: Object
	},
	data() {
		return {
			selectedKey: this.defaultKey,
			active: false,
			wrong: false
		};
	},
	computed: {
		selectedText() {
			return this.selectedKey
				? this.options[this.selectedKey]
				: this.placeholder
				? this.placeholder
				: "";
		}
	},
	created() {
		this.$emit("getInput", this);
	},
	methods: {
		validate() {
			let valid = true;
			if (this.required && !this.selectedKey) {
				this.wrong = true;
				valid = false;
			}
			return valid;
		},
		getValue() {
			return this.validate() ? { key: this.name, value: this.selectedKey} : false;
		},
		toggleActive() {
			this.active = !this.active;
		},
		disableActive() {
			this.active = false;
		},
		selectOption(key) {
			this.wrong = false;
			this.selectedKey = key;
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
.option {
	padding: 12px;
	font-size: 13px;
	background: #fff;
	border-left: 1px solid rgba(0, 206, 201, 1);
	border-right: 1px solid rgba(0, 206, 201, 1);
	&:hover {
		background: #ccc;
	}
	&:first-child {
		border-top: 1px solid #c2c9dd;
	}
	&:last-child {
		border-bottom: 1px solid rgba(0, 206, 201, 1);
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
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