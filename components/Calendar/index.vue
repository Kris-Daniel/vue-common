<template>
	<div class="calendar" :class="[cssClass]">
		<div class="calendar_relative">
			<CurrentView></CurrentView>
		</div>
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
		settings: {
			type: Object,
			default: {}
		}
	},
	components: {
		CurrentView
	},
	created() {
		this.calendarKey = "Krislendar";
		this.CalendarStore = new Vue(CalendarStore);
		this.CalendarStore.setStore(this.settings);
	},
	methods: {}
};
</script>

<style lang="less" scoped>
.calendar {
	max-width: 250px;
	margin: 0 auto;
	user-select: none;
	padding: 5px;
	box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.4);
}
.calendar_relative {
	position: relative;
}
</style>