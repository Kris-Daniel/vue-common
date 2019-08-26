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
	mounted() {
		this.setInputs();
	},
	methods: {
		setInputs() {
			this.$children.forEach(item => {
				if (item.inputFormKey) this.inputs.push(item);
			});
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