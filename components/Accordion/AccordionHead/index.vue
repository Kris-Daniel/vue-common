<template>
	<div class="accord_head" :class="{active}" @click="toggleActive">
        <div class="accord_head-icon" v-if="icon">
            <component :is="icon"></component>
        </div>
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
	props: ["active", "icon", "carret"],
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
	display: flex;
	width: 100%;
	align-items: center;
	height: 60px;
	padding: 0px 50px;
	background: #fff;
	color: #293143;
	border: 1px solid #f3f3f6;
	user-select: none;
	cursor: pointer;
	&:hover {
		border: 1px solid coral;
	}
    @media(max-width: 850px) {
        padding: 0px 20px;
    }
}
&.active {
	border: 1px solid coral;
	border-bottom: 1px solid #c2c9dd;
}

.accord_head-icon {
	display: inline-block;
	vertical-align: middle;
	font-size: 20px;
	line-height: 1;
	height: 20px;
	margin-right: 20px;
	svg {
		height: 20px;
		width: 20px;
	}
    @media(max-width: 850px) {
        margin-right: 10px;;
    }
}

.accord_head-title {
	display: inline-block;
	vertical-align: middle;
	font-size: 15px;
	line-height: 1;
}

.accord_head_carret {
	position: absolute;
	right: 50px;
	top: 50%;
	line-height: 1;
	font-size: 4px;
	transform: translateY(-50%);
	transition: 130ms all ease-in-out;
	@media(max-width: 850px) {
        right: 20px;;
    }
	svg {
		width: 9px;
		height: 4px;
	}
}
&.active > .accord_head_carret {
	transform: translateY(-50%) rotate(180deg);
}
</style>