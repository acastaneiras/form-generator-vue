<template>
  <n-space>
    <n-time-picker :placeholder="currentQuestion.hasPlaceholder ? currentQuestion.placeholderText : ''" size="medium" />
  </n-space>
</template>
<script>
import { NTimePicker, NSpace } from 'naive-ui'

export default {
    name: 'TimeElement',
    props: ['currentQuestion'],
    components: {
        NTimePicker, NSpace
    }
}
</script>