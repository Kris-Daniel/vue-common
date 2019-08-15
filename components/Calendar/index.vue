<template>
	<div class="calendar" :class="[cssClass]">
		<span @click="changeMonthId(-1)">Next</span> -
		<span @click="changeMonthId(1)">Prev</span>
		<no-ssr>
			{{state}}
			<Weeks></Weeks>
		</no-ssr>
	</div>
</template>

<script>
import Vue from "vue";
import CalendarStore from "./helpers/CalendarStore";
import Weeks from "./Weeks";
export default {
	name: "Calendar",
	props: {
		cssClass: String,
		settings: Object
	},
	components: {
		Weeks
	},
	data() {
		return {};
	},
	computed: {
		state() {
			return this.CalendarStore ? this.CalendarStore.state : false;
		}
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
	methods: {
		changeMonthId(step) {
			this.CalendarStore.monthId += step;
		}
	}
};
</script>