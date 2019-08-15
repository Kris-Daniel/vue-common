<template>
	<div class="month-select">
		<MonthViewControl></MonthViewControl>
		<div class="month-box" v-for="(month, index) in months" :key="month">
			<div class="month" @click="changeMonthId(index)">{{month}}</div>
		</div>
	</div>
</template>

<script>
import CalendarMixin from "../helpers/CalendarMixin";
import MonthViewControl from "../MonthViewControl";
export default {
	name: "MonthSelect",
	mixins: [CalendarMixin],
	components: {
		MonthViewControl
	},
	computed: {
		months() {
			return this.CalendarStore.MONTHS;
        },
        yearId() {
            return this.CalendarStore.yearId;
        }
    },
    methods: {
        changeMonthId(index) {
            this.CalendarStore.monthId = this.yearId * 12 + index;
            this.CalendarStore.currentView = "DaySelect";
        },
    }
};
</script>

<style lang="less">
.month-select {
	font-size: 0;
	.month-box {
		display: inline-block;
		vertical-align: middle;
		padding: 5px;
		width: 33.333333%;
		text-align: center;
    }
    .month{
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