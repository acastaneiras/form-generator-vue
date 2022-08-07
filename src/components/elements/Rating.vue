<template>
        <div class="mb-6">
            <h2 class="flex w-full align-middle justify-center text-gray-500 dark:text-gray-400 "> <i class="fa-solid fa-star fa-2x"></i>
                <div class="text-lg font-semibold">Rating</div>
            </h2>
        </div>
        <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Question name
            </label>
            <input type="text" v-model="store.question.name" placeholder="Question name"
                class="form-input-text">
        </div>
</template>

<script setup>
    import { useGlobalStore } from '../../stores/store.js';
    const store = useGlobalStore();
</script>