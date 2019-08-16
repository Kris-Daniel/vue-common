<template>
	<table class="weeks">
		<tr class="week" v-for="week in weeks" :key="week.id">
			<Day v-for="day in week.week" :key="day" :dayId="day"></Day>
		</tr>
	</table>
</template>

<script>
import CalendarMixin from "../helpers/CalendarMixin";
import CalendarService from "../helpers/CalendarService";
import Day from "../Day";
export default {
	name: "Weeks",
	mixins: [CalendarMixin],
	components: {
		Day
	},
	computed: {
		mondayFirst() {
			return this.CalendarStore
				? this.CalendarStore.options.mondayFirst
				: true;
		},
		weeks() {
			return CalendarService.getWeeks(
				this.CalendarStore.dayId,
				this.CalendarStore.numOfWeeks,
				this.mondayFirst
			);
		}
	},
	watch: {
		weeks() {
			this.$emit("weeksChanged", this.weeks);
		}
	}
};
</script>

<style lang="less" scoped>
.weeks {
	width: 100%;
	border-collapse: collapse;
	table-layout: fixed;
	border-spacing: 0;
}
</style>