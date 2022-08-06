<template>
    <n-space vertical>
        <n-select v-model:value="value" :placeholder="currentQuestion.hasPlaceholder ? currentQuestion.placeholderText : ''" :options="currentQuestion.options" />
    </n-space>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NSelect } from "naive-ui";

export default defineComponent({
    name: 'SelectElement',
    setup() {
        return {
            value: ref(null),
        };
    },
    props: ['currentQuestion'],
    components: {
        NSelect
    }
});
</script>