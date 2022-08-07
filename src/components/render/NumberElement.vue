<template>
    <n-input-number v-model:value="value" clearable />
</template>

<script>
import { NInputNumber } from "naive-ui";
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'NumberElement',
    props: ['currentQuestion'],
    setup() {
        return {
            value: ref(0)
        };
    },
    components: {
        NInputNumber
    }
});
</script>