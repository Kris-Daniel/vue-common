<template>
	<div class="accord_head" :class="{active}" @click="toggleActive">
        <div class="accord_head-title">
            <slot></slot>
        </div>
		<div class="accord_head_carret">
			<component :is="carret"></component>
		</div>
	</div>
</template>

<script>
export default {
	name: "AccordionHead",
	props: ["active", "carret"],
	methods: {
		toggleActive() {
			this.$emit("toggleActive");
		}
	}
};
</script>

<style lang="less" scoped>
.accord_head {
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #fff;
	color: #293143;
	border: 1px solid #f3f3f6;
	user-select: none;
	cursor: pointer;
	&:hover {
		border: 1px solid coral;
	}
	svg {
		height: 1.2em;
		line-height: 1;
		display: inline-block;
		vertical-align: middle;
	}
}
&.active {
	border: 1px solid coral;
	border-bottom: 1px solid #c2c9dd;
}

.accord_head-title {
	display: inline-block;
	vertical-align: middle;
	font-size: 15px;
	line-height: 1;
}

.accord_head_carret {
	font-size: 4px;
	line-height: 1;
	transition: 130ms all ease-in-out;
	svg {
		width: 9px;
		height: 4px;
	}
}
&.active > .accord_head_carret {
	transform: rotate(180deg);
}
</style>