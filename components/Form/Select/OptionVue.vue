<template>
	<div class="option" :class="{active, disabled}" @click="setOption">
		<div class="option_text" ref="value">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "OptionVue",
	props: ["name", "disabled", "selected"],
	data() {
		return {
			active: this.selected,
			value: ""
		};
	},
	mounted() {
		this.value = this.$refs.value.innerHTML;
	},
	methods: {
		setOption($event) {
			if (!this.disabled) this.$parent.setOption(this);
			else
				this.$nextTick(() => {
					this.$parent.toggleActive();
				});
		}
	}
};
</script>

<style lang="less" scoped>
.option {
	padding: 12px;
	font-size: 13px;
	background: #fff;
	border-left: 1px solid rgba(0, 206, 201, 1);
	border-right: 1px solid rgba(0, 206, 201, 1);
	&:not(.disabled):hover {
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
	&.disabled .option_text{
		opacity: 0.5;
	}
	.option_text svg{
		height: 1em;
		width: 1em;
		line-height: 1em;
		display: inline-block;
		vertical-align: middle;
	}
}
</style>