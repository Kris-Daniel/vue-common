<template>
	<div class="day-select">
		<DayViewControl></DayViewControl>
        <WeekDays></WeekDays>
		<Weeks></Weeks>
	</div>
</template>

<script>
import DayViewControl from "../DayViewControl";
import WeekDays from "../WeekDays";
import Weeks from "../Weeks";
export default {
	name: "DaySelect",
	components: {
        DayViewControl,
        WeekDays,
		Weeks
	}
};
</script>