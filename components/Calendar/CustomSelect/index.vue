<template>
    <div class="custom-view">
        <CustomViewControl :weeks="weeks"></CustomViewControl>
        <Weeks @weeksChanged="setWeeks"></Weeks>
    </div>
</template>

<script>
import Vue from "vue";
import CalendarMixin from "../helpers/CalendarMixin";
import CalendarService from "../helpers/CalendarService";
import CustomViewControl from "../CustomViewControl";
import Weeks from "../Weeks";
export default {
    name: "CustomSelect",
    mixins: [CalendarMixin],
    components: {
        CustomViewControl,
        Weeks
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