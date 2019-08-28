<template>
	<div class="form">
		<slot></slot>
	</div>
</template>

<script>
export default {
    name: "FormVue",
	data() {
		return {
			inputs: []
		};
	},
	created() {
		this.formKey = "FormVue"
	},
	methods: {
		addInput(input) {
			this.inputs.push(input);
		},
		submit() {
			let valid = true;
			let data = {};
			this.inputs.forEach(item => {
				let value = item.getValue();
				if (value === null) valid = false;
				else data = {
                    ...data,
                    ...value
                }
            });
            
            if(valid) {
                this.$emit("submit", data);
            }
		}
	}
};
</script>