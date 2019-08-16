<template>
	<td class="day" :class="{checked, current, default: isDefault, another: anotherMonth}" @click="toggleCheck">{{dayObj.day}}</td>
</template>

<script>
import Vue from "vue";
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
    computed: {
        checked() {
            let checked = false;
            if(this.CalendarStore) {
                if(this.CalendarStore.checkedDays[this.ref])
                    checked = true;
            }
            return checked;
        },
        isDefault() {
            let isDefault = false;
            if(this.CalendarStore) {
                if(this.CalendarStore.defaultDays[this.ref]) {
                    Vue.set(this.CalendarStore.checkedDays, this.ref, true);
                    isDefault = true;
                }
            }
            return isDefault;
        },
        current() {
            return this.dayId == this.CalendarStore.currentDayId ? true : false;
        },
        anotherMonth() {
            let another = false;
            if(this.CalendarStore.monthId != CalendarService.getMonthId(this.dayObj.year, this.dayObj.month) && this.CalendarStore.stateMonth)
                another = true;
            return another;
        }
    },
	created() {
        this.dayObj.date = CalendarService.getDateByDayId(this.dayId);
        this.dayObj.year = this.dayObj.date.getFullYear();
        this.dayObj.month = this.dayObj.date.getMonth();
        this.dayObj.day = this.dayObj.date.getDate();
        this.dayObj.weekDay = this.dayObj.date.getDay();
        this.dayObj.weekDayName = this.CalendarStore.WEEK[this.dayObj.weekDay];
        this.dayObj.dayStr = CalendarService.getDayStr(
            this.dayObj.year,
            this.dayObj.month,
            this.dayObj.day
        );
        this.ref = "d" + this.dayObj.dayStr;
    },
    methods: {
        toggleCheck() {
            let checked = this.checked;
            if(!this.CalendarStore.options.multiselect)
                Vue.set(this.CalendarStore, "checkedDays", {});
            if(!checked)
                Vue.set(this.CalendarStore.checkedDays, this.ref, true);
            else
                Vue.delete(this.CalendarStore.checkedDays, this.ref);
        }
    }
};
</script>

<style lang="less" scoped>
    .day{
        padding: 10px;
        text-align: center;
        cursor: pointer;
        &:hover{
            background: #ddd;
        }
        &.another{
            color: #bbb;
        }
        &.checked{
            background: coral;
            color: #fff;
        }
        &.default{
            background: #ccc;
        }
    }
</style>