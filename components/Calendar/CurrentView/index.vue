<template>
	<div class="current-view">
		<component :is="view"></component>
	</div>
</template>

<script>
import CalendarMixin from "../helpers/CalendarMixin";
import YearSelect from "../YearSelect";
import MonthSelect from "../MonthSelect";
import DaySelect from "../DaySelect";

export default {
	name: "CurrentView",
	mixins: [CalendarMixin],
	components: {
        YearSelect,
        MonthSelect,
        DaySelect
	},
	data() {
		return {
		};
	},
	computed: {
        view() {
            return this.CalendarStore.currentView;
        }
	}
};
</script>