<template>
	<div class="day-select">
		<ViewControl></ViewControl>
		<Weeks></Weeks>
	</div>
</template>

<script>
import ViewControl from "../ViewControl";
import Weeks from "../Weeks";
export default {
	name: "DaySelect",
	components: {
		ViewControl,
		Weeks
	}
};
</script>