<template>
	<div class="day-select">
		<DayViewControl></DayViewControl>
        <WeekDays></WeekDays>
		<Weeks></Weeks>
		<div class="now" @click="setTodayView">Now</div>
	</div>
</template>

<script>
import CalendarMixin from "../helpers/CalendarMixin";
import DayViewControl from "../DayViewControl";
import WeekDays from "../WeekDays";
import Weeks from "../Weeks";
export default {
	name: "DaySelect",
	mixins: [CalendarMixin],
	components: {
        DayViewControl,
        WeekDays,
		Weeks
	},
	methods: {
		setTodayView() {
			this.CalendarStore.setStore();
		}
	}
};
</script>

<style lang="less">
	.now{
		float: right;
		margin: 14px 6px;
		color: coral;
		cursor: pointer;
		&:hover{
			text-decoration: underline;
		}
	}
</style>