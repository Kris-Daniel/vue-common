<template>
	<div class="year-view-control">
		<div class="vc-btn vc-btn--prev" @click="changeYearId(-10)">
			<LeftDoubleSvg></LeftDoubleSvg>
		</div>
		<div class="vc-from-to">{{fromTo}}</div>
		<div class="vc-btn vc-btn--next" @click="changeYearId(10)">
			<RightDoubleSvg></RightDoubleSvg>
		</div>
	</div>
</template>

<script>
import CalendarMixin from "../helpers/CalendarMixin";
import LeftDoubleSvg from "../icons/LeftDoubleSVG";
import RightDoubleSvg from "../icons/RightDoubleSVG";
export default {
	name: "YearViewControl",
	props: ["years"],
	mixins: [CalendarMixin],
	components: {
		LeftDoubleSvg,
		RightDoubleSvg
	},
	computed: {
		fromTo() {
			return `${this.years[0]} - ${this.years[this.years.length - 1]}`;
		}
    },
    methods: {
        changeYearId(step) {
			this.CalendarStore.yearId += step;
		},
    }
};
</script>

<style lang="less">
.year-view-control {
	position: relative;
	text-align: center;
    font-size: 16px;
    line-height: 1;
	height: 24px;
	&:after {
		visibility: hidden;
		display: block;
		font-size: 0;
		content: " ";
		clear: both;
		height: 0;
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
    .vc-from-to{
        display: inline-block;
        margin-top: 4px;
    }
}
</style>