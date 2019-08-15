<template>
	<table class="weekdays">
		<tr>
			<td v-for="weekName in weekNames" :key="weekName">{{weekName.slice(0, 3)}}</td>
		</tr>
	</table>
</template>

<script>
import CalendarMixin from "../helpers/CalendarMixin";
export default {
	name: "Weekdays",
	mixins: [CalendarMixin],
	data() {
		return {
			weekNames: []
		};
	},
	computed: {
		mondayFirst() {
			return this.CalendarStore
				? this.CalendarStore.options.mondayFirst
				: null;
		}
	},
	watch: {
		mondayFirst() {
			this.weekNames.splice(0, this.weekNames.length);
			for (let i = 1; i < 7; i++)
				this.weekNames.push(this.CalendarStore.WEEK[i]);
			this.weekNames[this.mondayFirst ? "push" : "unshift"](
				this.CalendarStore.WEEK[0]
			);
		}
	},
	created() {
		
	}
};
</script>

<style lang="less">
.weekdays {
	width: 100%;
	border-collapse: collapse;
	table-layout: fixed;
    border-spacing: 0;
    td{
        text-align: center;
    }
}
</style>