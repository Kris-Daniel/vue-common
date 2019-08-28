<template>
	<div class="now" v-if="active" @click="setTodayView">Now</div>
</template>

<script>
import CalendarMixin from "../helpers/CalendarMixin";
export default {
    name: "NowBtn",
    mixins: [CalendarMixin],
    computed: {
        active() {
            return this.CalendarStore.currentDayInView ? false : true;
        }
    },
    methods: {
		setTodayView() {
			this.CalendarStore.setStore();
		}
	}
}
</script>

<style lang="less">
	.now{
		position: absolute;
		top: 100%;
		right: 0;
		margin: 14px 6px;
		color: coral;
		cursor: pointer;
		&:hover{
			text-decoration: underline;
		}
	}
</style>