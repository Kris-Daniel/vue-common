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
			<Calendar></Calendar>
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
export default {
	name: "Main",
	components: {
		Accordion,
		Tabs,
		Tab,
		Calendar
	}
};
</script>