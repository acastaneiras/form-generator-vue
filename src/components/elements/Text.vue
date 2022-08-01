<template>
    <div class="mb-6">
        <h2 class="flex w-full align-middle justify-center text-gray-500 dark:text-gray-400 "> <i class="fa-solid fa-font fa-2x"></i>
            <div class="text-lg font-semibold">Text</div>
        </h2>
    </div>
    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Question name
        </label>
        <input type="text" v-model="question.name" placeholder="Question name"
            class="form-input-text">
    </div>
</template>

<script>
export default {
    data() {
        return {
            question: Object.assign({ type: "text" }),
        }
    }
}
</script>