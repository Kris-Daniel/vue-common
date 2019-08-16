<template>
	<div class="day-select">
		<DayViewControl></DayViewControl>
        <WeekDays></WeekDays>
		<Weeks></Weeks>
		<NowBtn></NowBtn>
	</div>
</template>

<script>
import DayViewControl from "../DayViewControl";
import WeekDays from "../WeekDays";
import Weeks from "../Weeks";
import NowBtn from "../NowBtn";
export default {
	name: "DaySelect",
	components: {
        DayViewControl,
        WeekDays,
		Weeks,
		NowBtn
	}
};
</script>