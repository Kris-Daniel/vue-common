<template>
	<div class="calendar" :class="[cssClass]">{{state}}</div>
</template>

<script>
import Vue from "vue";
import CalendarStore from "./helpers/CalendarStore";
export default {
    name: "Calendar",
    props: {
        cssClass: String,
        settings: Object
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
	},
	mounted() {
        this.CalendarStore.setStore({
            options: {
                multiselect: true,
                test: 2
            },
            from: "2018-02-02",
            to: "2020-02-02"
        });
	}
};
</script>