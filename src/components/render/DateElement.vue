<template>
    <n-date-picker :default-value="default_timestamp" :placeholder="currentQuestion.hasPlaceholder ? currentQuestion.placeholderText : ''" v-model:value="timestamp" type="date" />
</template>

<script>
import { defineComponent, ref } from "vue";
import { NDatePicker } from "naive-ui";
export default defineComponent({
    name: 'DateElement',
    props: ['currentQuestion'],
    setup() {
        return {
            default_timestamp: ref(new Date(new Date().getFullYear(), 0, 1).getTime())
        };
    },
    components: {
        NDatePicker
    }
});
</script>