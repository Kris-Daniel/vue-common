<template>
	<div class="page">
		<no-ssr>
			<Accordion>
				<div slot="title">Info</div>
				<div slot="content">Content</div>
			</Accordion>
			<Tabs>
				<Tab name="Iron" :selected="true">Iron</Tab>
				<Tab name="Gold">Gold</Tab>
			</Tabs>
			<Calendar :settings="calendarSettings"></Calendar>
			<SelectVue>
				<OptionVue name="option1">1</OptionVue>
				<OptionVue name="option2">2</OptionVue>
				<OptionVue name="option3">3</OptionVue>
			</SelectVue>
		</no-ssr>
	</div>
</template>

<script>
if (process.browser) {
	require("aframe");
}
import Accordion from "~/components/Accordion";
import { Tabs, Tab } from "~/components/Tabs/index.js";
import Calendar from "~/components/Calendar";
import {SelectVue, OptionVue} from "~/components/Select";
export default {
	name: "Main",
	components: {
		Accordion,
		Tabs,
		Tab,
		Calendar,
		SelectVue,
		OptionVue
	},
	data() {
		return {
			calendarSettings: {
				numOfWeeksCustom: 1,
				defaultDays: { "d2019-08-20": true },
				changeStateMonth() {
					let windowResize = () => {
						let width = parseFloat(window.getComputedStyle(document.querySelector("body"), null).width.replace("px", ""));
						this.stateMonth = width < 768 ? false : true;
					}
					windowResize();
					window.addEventListener("resize", windowResize);
				}
			}
		}
	},
	created() {

	}
};
</script>