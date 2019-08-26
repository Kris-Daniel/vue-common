<template>
    <div class="submit" :class="[cssClass]" @click="submit">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "SubmitBtn",
    props: ["cssClass"],
    created() {
        let parent = this.$parent;
        while(parent && !parent.formKey) {
            parent = parent.$parent;
        }
        this.parent = parent;
    },
    methods: {
        submit() {
            if(this.parent) this.parent.submit();
        }
    }
}
</script>