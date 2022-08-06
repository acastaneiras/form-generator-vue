<template>
    <div>
        <n-space>
            <n-radio v-for="option in currentQuestion.options" 
                :key="option.value" 
                :value="option.value"
                :label="option.value" 
                :name="`question-${currentQuestion.id}`" 
                :checked="checkedValue == option.value"
                :disabled="false"
                @change="handleChange">
            </n-radio>
        </n-space>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { NRadio, NSpace } from 'naive-ui';

export default defineComponent({
    name: 'RadioElement',
    setup() {
        const checkedValueRef = ref(null);

        return {
            checkedValue: checkedValueRef,
            handleChange(e) {
                checkedValueRef.value = e.target.value;
            }
        }
    },
    props: ['currentQuestion'],
    components: {
        NRadio, NSpace
    }
})
</script>