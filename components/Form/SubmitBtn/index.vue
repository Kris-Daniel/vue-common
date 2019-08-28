<template>
    <div class="submit" :class="[cssClass]" @click="submit">
        <slot></slot>
    </div>
</template>

<script>
import FindParent from "../helpers/FindParent";
export default {
    name: "SubmitBtn",
    props: ["cssClass"],
    created() {
        this.parent = FindParent.getParent(this, "formKey");
    },
    methods: {
        submit() {
            if(this.parent) this.parent.submit();
        }
    }
}
</script> 