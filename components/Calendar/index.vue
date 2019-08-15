<template>
	<div class="calendar" :class="[cssClass]">
		<no-ssr>
			<ViewControl></ViewControl>
			<Weeks></Weeks>
		</no-ssr>
	</div>
</template>

<script>
import Vue from "vue";
import CalendarStore from "./helpers/CalendarStore";
import Weeks from "./Weeks";
import ViewControl from "./ViewControl";
export default {
	name: "Calendar",
	props: {
		cssClass: String,
		settings: Object
	},
	components: {
		Weeks,
		ViewControl
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