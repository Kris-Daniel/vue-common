<template>
	<div class="page">
		<no-ssr>
			<Accordion name="accordi">
				<div slot="title">Info</div>
				<div slot="content">Content</div>
			</Accordion>
			<FormVue @submit="formCallback">
				<Tabs>
					<Tab name="Iron" :selected="true">Iron</Tab>
					<Tab name="Gold">Gold</Tab>
				</Tabs>
				<hr />
				<SelectVue name="city" placeholder="option1" :required="true">
					<OptionVue name="option1" value="Select a City to visit:" :disabled="true" :selected="true"></OptionVue>
					<OptionVue name="option2" value="Los-Angeles"></OptionVue>
					<OptionVue name="option3" value="Washington"></OptionVue>
				</SelectVue>
				<InputVue
					type="text"
					name="name"
					id="vname"
					cssClass="vinput"
					defaultValue="Delete me"
					placeholder="Insert text"
					:required="true"
					:validate="(value) => value.length > 8 ? true : false"
					:validateEver="(value) => value.length > 10 ? value.slice(0, 10) : value"
				></InputVue>
				<CheckboxVue name="is18" :checked="true" :required="true"></CheckboxVue>
				<LabelVue name="ios">Click me</LabelVue>
				<IosSwitcher
					name="ios"
					:checked="true"
					:required="true"
					textOn="Work"
					textOff="Not work"
				></IosSwitcher>
				<hr />
				<SubmitBtn cssClass="dinl-mid">Submit</SubmitBtn>
			</FormVue>
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
import {
	FormVue,
	LabelVue,
	SubmitBtn,
	InputVue,
	CheckboxVue,
	IosSwitcher,
	SelectVue,
	OptionVue
} from "~/components/Form/index.js";
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
		InputVue,
		CheckboxVue,
		IosSwitcher,
		SubmitBtn,
		LabelVue
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