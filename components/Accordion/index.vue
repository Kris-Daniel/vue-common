<template>
	<div class="accord" :class="[{active}, cssClass]">
		<AccordionHead @toggleActive="toggleActive" :active="active" :icon="icon" :carret="carret">
			<slot name="title"></slot>
		</AccordionHead>
		<AccordionContent :active="active">
			<slot name="content">Hello</slot>
		</AccordionContent>
	</div>
</template>

<script>
import AccordionHead from "./AccordionHead";
import AccordionContent from "./AccordionContent";
export default {
	name: "Accordion",
	props: {
		name: String,
		cssClass: String,
		isOpen: Boolean,
		icon: String,
		carret: {
			default: "CarretDownSVG"
		},
	},
	components: {
		AccordionHead,
		AccordionContent
	},
	data() {
		return {
			active: false
		};
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
		this.active = this.isOpen;
		this.$emit("getAccordion", this);
	},
	methods: {
		toggleActive() {
			let state = this.active;
			window.VueAccordeons[this.name].forEach(value => {
				if (value.name === this.name) value.active = false;
			});
			this.active = !state;
		}
	}
};
</script>