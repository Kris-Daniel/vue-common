<template>
	<div class="tabs-wrapper">
		<div class="tabs">
			<ul>
				<li v-for="(tab, index) in tabs" :key="index" :class="{ active: tab.active }">
					<div @click="selectTab(tab)" class="tabs_tab">{{ tab.name }}</div>
				</li>
			</ul>
		</div>

		<div class="tabs-details">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "Tabs",
	data() {
		return { tabs: [] };
	},

	created() {
		this.tabs = this.$children;
	},
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(tab => {
				tab.active = tab.name == selectedTab.name;
			});
		}
	}
};
</script>

<style lang="less" scoped>
.tabs ul{
	position: relative;
	width: 100%;
	&:before{
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: #ccc;
		z-index: -1;
	}
}

.tabs li{
	display: inline-block;
	vertical-align: middle;
}
.tabs li.active {
	color: coral;
}
.tabs_tab {
	display: inline-block;
	vertical-align: middle;
	padding: 8px 20px;
	border-bottom: 1px solid #ccc;
	cursor: pointer;
	&:hover{
		border-bottom: 1px solid #000;
	}
}
.tabs li.active .tabs_tab{
	border-bottom: 1px solid coral;
}
</style>