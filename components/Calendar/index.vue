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
			numOfWeeksCustom: 2,
			stateMonth: false,
			defaultDays: {
				"d2019-08-20": true
			},
			from: "2018-02-02",
			to: "2020-02-02"
		});

		console.log(this.CalendarStore._data, "CalendarStore");
	},
	methods: {}
};
</script>

<style lang="less" scoped>
	.calendar{
		max-width: 250px;
		margin: 0 auto;
		user-select: none;
		padding: 5px;
		box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.4);
	}
</style>