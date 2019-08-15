<template>
	<div class="year-select">
        <YearViewControl :years="years"></YearViewControl>
		<div class="years">
			<div class="year-box" v-for="year in years" :key="year">
				<div class="year" @click="changeYearId(year)">{{year}}</div>
			</div>
		</div>
	</div>
</template>

<script>
import CalendarMixin from "../helpers/CalendarMixin";
import CalendarService from "../helpers/CalendarService";
import YearViewControl from "../YearViewControl";
export default {
	name: "YearSelect",
    mixins: [CalendarMixin],
    components: {
        YearViewControl
    },
	computed: {
		years() {
			return CalendarService.get10Years(this.CalendarStore.yearId);
		}
	},
    methods: {
        changeYearId(year) {
            this.CalendarStore.yearId = year;
            this.CalendarStore.currentView = "DaySelect";
        }
    }
};
</script>

<style lang="less">
.year-select {
	font-size: 0;
	.year-box {
		display: inline-block;
		vertical-align: middle;
		padding: 5px;
		width: 33.333333%;
		text-align: center;
	}
	.year {
		display: inline-block;
		width: 100%;
		padding: 15px 0;
		font-size: 14px;
		line-height: 1;
		cursor: pointer;
		transition: 150ms all ease;
		&:hover {
			padding: 14px 0;
			font-size: 16px;
		}
	}
}
</style>