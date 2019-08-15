<template>
	<div class="view-control">
		<div class="vc-btn vc-btn--prev" @click="changeYearId(-1)">
			<LeftDoubleSvg></LeftDoubleSvg>
		</div>
		<div class="vc-btn vc-btn--prev" @click="changeMonthId(-1)">
			<LeftSvg></LeftSvg>
		</div>
		<div class="vc-date vc-date--left" @click="showYearSelect">{{CalendarStore.yearId}}</div>
		<div class="vc-date vc-date--right" @click="showMonthSelect">{{CalendarStore.monthName}}</div>
		<div class="vc-btn vc-btn--next" @click="changeYearId(1)">
			<RightDoubleSvg></RightDoubleSvg>
		</div>
		<div class="vc-btn vc-btn--next" @click="changeMonthId(1)">
			<RightSvg></RightSvg>
		</div>
	</div>
</template>

<script>
import CalendarMixin from "../helpers/CalendarMixin";
import LeftSvg from "../icons/LeftSVG";
import LeftDoubleSvg from "../icons/LeftDoubleSVG";
import RightSvg from "../icons/RightSVG";
import RightDoubleSvg from "../icons/RightDoubleSVG";
export default {
	name: "ViewControl",
	mixins: [CalendarMixin],
	components: {
		LeftSvg,
		LeftDoubleSvg,
		RightSvg,
		RightDoubleSvg
	},
	methods: {
		changeYearId(step) {
			this.CalendarStore.yearId += step;
		},
		changeMonthId(step) {
			this.CalendarStore.monthId += step;
		},
		showYearSelect() {
			this.CalendarStore.currentView = "YearSelect";
		},
		showMonthSelect() {
			this.CalendarStore.currentView = "MonthSelect";
		}
	}
};
</script>

<style lang="less" scoped>
.view-control {
	position: relative;
	text-align: center;
	font-size: 16px;
	height: 24px;
	&:after {
		visibility: hidden;
		display: block;
		font-size: 0;
		content: " ";
		clear: both;
		height: 0;
	}
}
.vc-btn {
	transition: 150ms all ease;
	cursor: pointer;
	font-size: 12px;
	margin-top: 6px;
	&:hover {
		transform: scale(1.1);
	}
	svg {
		height: 12px;
		width: 12px;
	}
	&--prev {
		float: left;
		margin-left: 10px;
	}
	&--next {
		float: right;
		margin-right: 10px;
	}
}
.vc-date {
	position: absolute;
	transition: 150ms all ease;
	cursor: pointer;
	top: 50%;
	transform: translateY(-50%);
	&:hover {
		font-size: 18px;
	}
	&--left {
		right: 50%;
		margin-right: 4px;
	}
	&--right {
		left: 50%;
		margin-left: 4px;
	}
}
</style>