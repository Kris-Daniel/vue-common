<template>
	<transition
		name="accord"
		v-on:before-enter="beforeEnter"
		v-on:enter="enter"
		v-on:before-leave="beforeLeave"
		v-on:leave="leave"
	>
		<div class="accord_content" :class="{active}" v-show="active">
			<div class="accord_content-body">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "AccordionContent",
	props: ["active"],
	methods: {
		beforeEnter(el) {
			el.style.height = "0";
		},
		enter(el) {
			el.style.height = el.scrollHeight + "px";
		},
		beforeLeave(el) {
			el.style.height = el.scrollHeight + "px";
		},
		leave(el) {
			el.style.height = "0";
		}
	}
};
</script>

<style lang="less" scoped>
.accord_content {
	transition: 130ms height ease;
	border: 1px solid coral;
	border-top: none;
}
.accord-leave-active,
.accord-enter-active {
	overflow: hidden;
	border: 1px solid coral;
	border-top: none;
}
.accord_content:not(.active) {
	border-top: 1px solid transparent;
}

.accord_content.active:not(.accord-leave-active):not(.accord-enter-active) {
	height: auto !important;
}
</style>