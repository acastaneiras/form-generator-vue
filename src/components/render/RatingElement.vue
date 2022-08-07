<template>
  <n-rate allow-half />
</template>
<script>
import { NRate } from "naive-ui";
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'RatingElement',
    props: ['currentQuestion'],
    setup() {
        return {
        };
    },
    components: {
        NRate
    }
});
</script>