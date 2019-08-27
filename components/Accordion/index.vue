<template>
	<div class="accord" :class="[{active}, commonCssClass]" :ref="commonCssClass">
		<div class="accord_head" @click="toggleActive">
			<div class="accord_head-left">
				<div class="accord_head-icon" v-if="icon">
					<component :is="icon"></component>
				</div>
				<div class="accord_head-title">
					<slot name="title"></slot>
				</div>
			</div>
			<div class="accord_head-right" v-if="hasHeadActive">
				<div class="not-active" :style="{display: [(hasHeadActive ? 'block' : '')]}">
					<div class="accord_head_carret">
						<component :is="carret"></component>
					</div>
				</div>
				<div class="is-active">
					<slot name="head-active"></slot>
				</div>
			</div>
		</div>
		<transition
			name="accord"
			v-on:before-enter="beforeEnter"
			v-on:enter="enter"
			v-on:before-leave="beforeLeave"
			v-on:leave="leave"
		>
			<div class="accord_content" v-show="active" ref="content">
				<div class="accord_content-body">
					<slot name="content">Hello</slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import Vue from "vue";
export default {
	name: "Accordion",
	props: {
		icon: String,
		carret: {
			default: "CarretDownSVG"
		},
		cssClass: {
			default: false
		},
		name: String,
		isOpen: Boolean
	},
	data() {
		return {
			active: false
		};
	},
	computed: {
		commonCssClass() {
			return this.cssClass ? this.cssClass : "";
		},
		hasHeadActive() {
			return !!this.$slots["head-active"];
		}
	},
	beforeMount() {
		if (!window.VueAccordeons) window.VueAccordeons = {};
		if (!window.VueAccordeons[this.name])
			window.VueAccordeons[this.name] = [];
		window.VueAccordeons[this.name].push(this);
	},
	beforeDestroy() {
		if (window.VueAccordeons[this.name])
			window.VueAccordeons[this.name].filter(item => item != this);
	},
	created() {
		if (this.isOpen) this.active = true;
		this.$emit("getAccordion", this);
	},
	methods: {
		toggleActive() {
			let state = this.active;
			window.VueAccordeons[this.name].forEach(value => {
				if (value.name === this.name) value.active = false;
			});
			this.active = !state;
		},
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

<style lang="less">
.accord {
	margin-bottom: 12px;
	.accord_head {
		position: relative;
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
		height: 60px;
		padding: 0px 50px;
		background: #fff;
		color: #293143;
		border: 1px solid #f3f3f6;
		cursor: pointer;
		&:hover {
			border: 1px solid coral;
		}
		.to(850px, {padding: 0px 20px;});
	}
	&.active .accord_head {
		border: 1px solid coral;
		border-bottom: 1px solid #c2c9dd;
	}
	.accord_head-right {
		flex-grow: 1;
		text-align: right;
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
		.to(850px, {margin-right: 10px;});
	}
	.accord_head-title {
		display: inline-block;
		vertical-align: middle;
		font-size: 15px;
		line-height: 1;
	}
	&:not(.active) .is-active,
	&.active .not-active {
		.from(769px, {display: none;});
	}
	.is-active {
		.to(768px, {display: none;}) !important;
	}
	.accord_head_carret {
		display: inline-block;
		vertical-align: middle;
		line-height: 1;
		transition: 130ms all ease-in-out;
		font-size: 4px;
		svg {
			width: 9px;
			height: 4px;
		}
	}
	&.active .accord_head_carret {
		transform: rotate(180deg);
	}

	.accord_content {
		// .scrollstyleY();
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
	&:not(.active) .accord_content {
		border-top: 1px solid transparent;
	}
	&.active
		.accord_content:not(.accord-leave-active):not(.accord-enter-active) {
		height: auto !important;
	}
	.accord_content-body {
		padding: 24px 50px;
		.to(850px, {padding: 24px 20px;});
	}
	.to(@max_width, @content) {
		@media screen and (max-width: @max_width) {
			@content();
		}
	}
	.from(@min_width, @content) {
		@media screen and (min-width: @min_width) {
			@content();
		}
	}
}
</style>