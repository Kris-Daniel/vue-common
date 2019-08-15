<template>
	<div class="month-view-control">
		<div class="vc-btn vc-btn--prev" @click="changeYearId(-1)">
			<LeftSvg></LeftSvg>
		</div>
		<div class="vc-year" @click="showYearSelect">{{year}}</div>
		<div class="vc-btn vc-btn--next" @click="changeYearId(1)">
			<RightSvg></RightSvg>
		</div>
	</div>
</template>

<script>
import CalendarMixin from "../helpers/CalendarMixin";
import LeftSvg from "../icons/LeftSVG";
import RightSvg from "../icons/RightSVG";
export default {
	name: "MonthViewControl",
	mixins: [CalendarMixin],
	components: {
		LeftSvg,
		RightSvg
    },
    computed: {
        year() {
            return this.CalendarStore.yearId;
        }
    },
    methods: {
        changeYearId(step) {
			this.CalendarStore.yearId += step;
        },
        showYearSelect() {
            this.CalendarStore.currentView = "YearSelect";
        }
    }
};
</script>

<style lang="less">
.month-view-control {
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
    .vc-year{
        display: inline-block;
        margin-top: 4px;
        cursor: pointer;
        &:hover{
            margin-top: 3px;
            font-size: 18px;
        }
    }
}
</style>