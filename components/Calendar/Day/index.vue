<template>
	<td class="day" :class="{checked}" @click="toggleCheck">{{dayObj.day}}</td>
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
            background: #ccc;
        }
        &.checked{
            background: coral;
        }
    }
</style>