<template>
	<div class="page">
		<no-ssr>
			<Accordion name="accordi">
				<div slot="title">Info</div>
				<div slot="content">
					<FormVue @submit="formCallback">
						<SelectVue name="city" placeholder="option1" :required="true">
							<OptionVue name="option1" value="Select a City to visit:" :disabled="true" :selected="true"></OptionVue>
							<OptionVue name="option2" value="Los-Angeles"></OptionVue>
							<OptionVue name="option3" value="Washington"></OptionVue>
						</SelectVue>
						<SubmitBtn cssClass="dinl-mid">Submit</SubmitBtn>
					</FormVue>
				</div>
			</Accordion>
			<Tabs>
				<Tab name="Iron" :selected="true">Iron</Tab>
				<Tab name="Gold">Gold</Tab>
			</Tabs>
			<Calendar :settings="calendarSettings"></Calendar>
		</no-ssr>
	</div>
</template>

<script>
if (process.browser) {
	require("aframe");
}
import Accordion from "~/components/Accordion";
import Calendar from "~/components/Calendar";
import { Tabs, Tab } from "~/components/Tabs";
import { SelectVue, OptionVue } from "~/components/Select/index.js";
import { FormVue, SubmitBtn } from "~/components/Form/index.js";
export default {
	name: "Main",
	components: {
		Accordion,
		Tabs,
		Tab,
		Calendar,
		SelectVue,
		OptionVue,
		FormVue,
		SubmitBtn
	},
	data() {
		return {
			calendarSettings: {
				numOfWeeksCustom: 1,
				defaultDays: { "d2019-08-20": true },
				changeStateMonth() {
					let windowResize = () => {
						let width = parseFloat(
							window
								.getComputedStyle(
									document.querySelector("body"),
									null
								)
								.width.replace("px", "")
						);
						this.stateMonth = width < 768 ? false : true;
					};
					windowResize();
					window.addEventListener("resize", windowResize);
				}
			}
		};
	},
	created() {},
	methods: {
		formCallback(data) {
			console.log(data);
		}
	}
};
</script>