<template>
	<div class="calendar" :class="[cssClass]">
		<no-ssr>
			<CurrentView></CurrentView>
		</no-ssr>
	</div>
</template>

<script>
import Vue from "vue";
import CalendarStore from "./helpers/CalendarStore";
import CurrentView from "./CurrentView";
export default {
	name: "Calendar",
	props: {
		cssClass: String,
		settings: Object
	},
	components: {
		CurrentView
	},
	created() {
		this.CalendarStore = new Vue(CalendarStore);
		this.calendarKey = "Krislendar";

		this.CalendarStore.setStore({
			options: {
				multiselect: true
			},
			from: "2018-02-02",
			to: "2020-02-02"
		});
	},
	methods: {}
};
</script>

<style lang="less" scoped>
	.calendar{
		max-width: 250px;
		margin: 0 auto;
		user-select: none;
	}
</style>