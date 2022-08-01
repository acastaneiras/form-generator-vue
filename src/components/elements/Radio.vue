<script>
export default {
    data() {
        return {
            question: Object.assign({ name: "", hasPunctuation: false, type: "radio", options: [] }),
        }
    },
    methods: {
        toggleCheckbox() {
            this.question.hasPunctuation = !this.question.hasPunctuation;
        },
        addOption() {
            this.question.options.push({ value: '', punctuation: 0.00 })
        },
        removeOption(index) {
            this.question.options.splice(index, 1)
        }
    }

}
</script>
<template>
    <div class="mb-6">
        <h2 class="flex w-full align-middle justify-center text-gray-500 dark:text-gray-400 "><i class="fa-solid fa-circle-dot fa-2x"></i>
            <div class="text-lg font-semibold ml-1"> Radio</div>
        </h2>
    </div>
    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Question name
        </label>
        <input type="text" v-model="question.name" placeholder="Question name" class="form-input-text">
    </div>
    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Punctuation?
        </label>
        <label for="hasPunctuation" class="inline-flex relative items-center cursor-pointer">
            <input v-model="question.hasPunctuation" type="checkbox" value="" id="hasPunctuation" class="sr-only peer">
            <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-700 dark:peer-checked:bg-slate-400">
            </div>
        </label>
    </div>

    <div class="mb-6">
        <div class="flex items-center justify-start pb-3">
            <label class="block align-middle text-sm font-medium text-gray-900 dark:text-gray-300">
                Question options
            </label>

            <button @click="addOption" class="btn-app ml-2" type="button">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        <div v-for="(option, index) in question.options" class="flex w-100 pb-2" :key="index">
            <input type="text" v-model="option.value" placeholder="Option name" class="form-input-text w-full">
            <input type="number" v-model.number="option.punctuation" v-show="question.hasPunctuation"
                placeholder="Option value" class="form-input-text ml-1 w-1/5" >
            <button @click="removeOption(index)" class="btn-app w-auto hover:text-red-700 dark:hover:text-red-700 ml-1 aspect-square ms-2" type="button">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </div>
</template>
