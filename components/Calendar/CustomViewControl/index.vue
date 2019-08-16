<template>
	<div class="custom-view-control">
		<div class="vc-btn vc-btn--prev" @click="changeDayId(-1)">
			<LeftSvg></LeftSvg>
		</div>
		<div class="vc-from-to" @click="showYearSelect">{{fromTo}}</div>
		<div class="vc-btn vc-btn--next" @click="changeDayId(1)">
			<RightSvg></RightSvg>
		</div>
	</div>
</template>

<script>
import CalendarService from "../helpers/CalendarService";
import CalendarMixin from "../helpers/CalendarMixin";
import LeftSvg from "../icons/LeftSVG";
import RightSvg from "../icons/RightSVG";
export default {
	name: "CustomViewControl",
	props: ["weeks"],
	mixins: [CalendarMixin],
	components: {
		LeftSvg,
		RightSvg
	},
	computed: {
		fromTo() {
			let fromTo = "";
			if (this.weeks.length) {
				let from = this.weeks[0].week[0];
				let to = this.weeks[this.weeks.length - 1].week[6];

				fromTo += `${CalendarService.getDayById(from)} ${
					this.CalendarStore.MONTHS[
						CalendarService.getMonthByDayId(from)
					].slice(0, 3)
				} - ${CalendarService.getDayById(to)} ${
					this.CalendarStore.MONTHS[
						CalendarService.getMonthByDayId(to)
					].slice(0, 3)
				}`;
				console.log(from, to, this.weeks);
			}
			return fromTo;
		}
	},
	methods: {
		changeDayId(factor) {
			this.CalendarStore.dayId =
				this.CalendarStore.dayId +
				this.CalendarStore.numOfWeeksCustom * factor * 7;
		},
		showYearSelect() {
			this.CalendarStore.currentView = "YearSelect";
		}
	}
};
</script>

<style lang="less">
.custom-view-control {
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
	.vc-from-to {
		display: inline-block;
		margin-top: 4px;
		cursor: pointer;
		&:hover {
			margin-top: 3px;
			font-size: 18px;
		}
	}
}
</style>