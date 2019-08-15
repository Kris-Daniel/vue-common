<template>
	<td class="day" @click="showDayObj">{{dayObj.day}}</td>
</template>

<script>
import CalendarMixin from "../helpers/CalendarMixin";
import CalendarService from "../helpers/CalendarService";
export default {
    name: "Day",
    mixins: [CalendarMixin],
	props: {
		dayId: Number
    },
    data() {
        return  {
            dayObj: {}
        }
    },
	created() {
        this.dayObj.date = new Date(this.dayId * 86400000);
        this.dayObj.year = this.dayObj.date.getFullYear();
        this.dayObj.month = this.dayObj.date.getMonth();
        this.dayObj.day = this.dayObj.date.getDate();
        this.dayObj.dayStr = CalendarService.getDayStr(
            this.dayObj.year,
            this.dayObj.month,
            this.dayObj.day
        );
    },
    methods: {
        showDayObj() {
            console.log(this.dayObj)
        }
    }
};
</script>

<style lang="less" scoped>
    td{
        padding: 10px;
        text-align: center;
        cursor: pointer;
        &:hover{
            background: #ccc;
        }
    }
</style>