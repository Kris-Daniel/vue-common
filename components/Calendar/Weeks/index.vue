<template>
	<table class="weeks">
		<tr class="week" v-for="week in weeks" :key="week.id">
			<Day v-for="(day, index) in week.week" :key="index" :dayId="day"></Day>
		</tr>
	</table>
</template>

<script>
import Vue from "vue";
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
		weeks() {
			let weeks = [];
			if (this.CalendarStore) {
				weeks = CalendarService.getWeeks(
					this.CalendarStore.dayId,
					this.CalendarStore.numOfWeeks,
					this.CalendarStore.options.mondayFirst
				);
			}
			return weeks;
		}
	},
	watch: {
		weeks() {
			console.log("weeks was changed");
			this.$forceUpdate();
		}
	},
	created() {
		console.log(this.CalendarStore._data, "here");
		setTimeout(() => {
            // this.CalendarStore.dayId += 30;
		}, 3000);
	}
};
</script>