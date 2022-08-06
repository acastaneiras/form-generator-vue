<template>
    <div>
        <n-input :placeholder="currentQuestion.hasPlaceholder ? currentQuestion.placeholderText : ''">
        </n-input>
    </div>
</template>
<script>
import { NInput } from 'naive-ui'

export default {
    name: 'TextElement',
    props: ['currentQuestion'],
    components: {
        NInput
    }
}
</script>