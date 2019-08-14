<template>
	<div class="page">
		<Accordion>
			<div slot="title">Info</div>
			<div slot="content">Content</div>
		</Accordion>
		<Tabs>
			<Tab name="Iron" :selected="true">Iron</Tab>
			<Tab name="Gold">Gold</Tab>
		</Tabs>
	</div>
</template>

<script>
import Accordion from "~/components/Accordion";
import {Tabs, Tab} from "~/components/Tabs/index.js";
export default {
	name: "Main",
	components: {
		Accordion,
        Tabs,
        Tab
	}
};
</script>