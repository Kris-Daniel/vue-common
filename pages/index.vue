<template>
    <div class="page">
        <Accordion>
            <div slot="title">Info</div>
            <div slot="content">Content</div>
        </Accordion>
    </div>
</template>

<script>
import Accordion from "~/components/Accordion";
export default {
    name: "Main",
    components: {
        Accordion
    }
};
</script>