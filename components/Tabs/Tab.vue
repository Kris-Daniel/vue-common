<template>
	<div v-show="active" class="tabs_content">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "Tab",
	props: {
		name: { required: true },
		selected: { default: false }
	},

	data() {
		return {
			active: false
		};
	},

	mounted() {
		this.active = this.selected;
	}
};
</script>

<style lang="less" scoped>
    .tabs_content{
        padding: 20px;
    }
</style>