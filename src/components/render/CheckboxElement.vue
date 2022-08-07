<template>
        <n-space item-style="display: flex;">
            <n-checkbox v-for="option in options" 
                :label="option.label"
                :name="`question-${currentQuestion.id}`"
                :value="option.value"  >
                {{option.label}}
            </n-checkbox>
        </n-space>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NSpace, NCheckbox, NCheckboxGroup } from 'naive-ui';
export default defineComponent({
    name: 'CheckboxElement',
    props: ['currentQuestion'],
    setup() {
        return {

        }
    },
    components: {
        NSpace, NCheckbox, NCheckboxGroup
    },
    computed: {
        options() {
            return this.currentQuestion.options
        }
    }
});
</script>