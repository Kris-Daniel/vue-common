<template>
    <div class="custom-view">
        <CustomViewControl :weeks="weeks"></CustomViewControl>
        <Weeks @weeksChanged="setWeeks"></Weeks>
        <NowBtn></NowBtn>
    </div>
</template>

<script>
import Vue from "vue";
import CalendarMixin from "../helpers/CalendarMixin";
import CalendarService from "../helpers/CalendarService";
import CustomViewControl from "../CustomViewControl";
import Weeks from "../Weeks";
import NowBtn from "../NowBtn";
export default {
    name: "CustomSelect",
    mixins: [CalendarMixin],
    components: {
        CustomViewControl,
        Weeks,
        NowBtn
    },
    data() {
        return {
            weeks: []
        }
    },
    methods: {
        setWeeks(weeks) {
            Vue.set(this, "weeks", weeks)
        }
    }
}
</script>