<template>
    <div
        class="overflow-y-auto h-full dark:text-gray-300 bg-slate-100 dark:bg-slate-800/50 border-l-2 border-slate-300 dark:border-slate-700">
        <form @submit.prevent="onSubmit">
            <div class="flex h-10 px-4 align-middle w-full m-auto">
                <div v-if="currentType" class="flex justify-start">
                    <button @click="currentType = null"><i class="fa-solid fa-angle-left"></i> Back </button>
                </div>
                <div class="flex ml-auto justify-end">
                    <button type="button" @click="closePicker()"><i class="fas fa-times"></i> Close </button>
                </div>
            </div>
            <div class="p-4">
                <ul v-show="currentType == null" class="grid gap-6 w-full md:grid-cols-3">
                    <li>
                        <label for="text-option" @click="setCurrentType('text')"
                            class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="flex w-full justify-center align-middle">
                                <i class="fa-solid fa-font fa-2x"></i>
                                <div class="text-lg font-semibold">Text</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="select-option" @click="setCurrentType('select')"
                            class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="flex w-full justify-center align-middle">
                                <i class="fa-solid fa-square-caret-down fa-2x"></i>
                                <div class="text-lg font-semibold ml-2">Select</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="radio-option" @click="setCurrentType('radio')"
                            class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="flex w-full justify-center align-middle">
                                <i class="fa-solid fa-circle-dot fa-2x"></i>
                                <div class="text-lg font-semibold ml-2">Radio</div>
                            </div>
                        </label>
                    </li>
                </ul>
                <Text v-if="currentType === 'text'"></Text>
                <Select v-if="currentType === 'select'"></Select>
                <Radio v-if="currentType === 'radio'"></Radio>
                <div id="question-options" v-show="currentType">
                    <div class="flex flex-col">
                        <div class="w-full mb-6">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Subtitle
                            </label>
                            <label for="subtitle" class="inline-flex relative items-center cursor-pointer">
                                <input v-model="store.question.hasSubtitle" type="checkbox" value="" id="subtitle"
                                    class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-700 dark:peer-checked:bg-slate-400">
                                </div>
                            </label>
                            <input v-show="store.question.hasSubtitle" type="text" v-model="store.question.subtitleText"
                                placeholder="Input your text..."
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        </div>
                        <div class="w-full mb-6">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Placeholder
                            </label>
                            <label for="placeholder" class="inline-flex relative items-center cursor-pointer">
                                <input v-model="store.question.hasPlaceholder" type="checkbox" value="" id="placeholder"
                                    class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-700 dark:peer-checked:bg-slate-400">
                                </div>
                            </label>
                            <input v-show="store.question.hasPlaceholder" type="text"
                                v-model="store.question.placeholderText" placeholder="Input your text..."
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="w-full mb-6">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Required
                            </label>
                            <label for="required" class="inline-flex relative items-center cursor-pointer">
                                <input v-model="store.question.isRequired" type="checkbox" value="" id="required"
                                    class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-700 dark:peer-checked:bg-slate-400">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="currentType" class="absolute w-full bottom-0 left-0">
                <button class="w-full h-10 bg-slate-300 dark:bg-slate-700">
                    <i class="fas fa-plus"></i> Add question
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useGlobalStore } from '../stores/store';
import Text from "./elements/Text.vue";
import Select from './elements/Select.vue';
import Radio from './elements/Radio.vue';

const store = useGlobalStore();
const currentType = ref(null);

const emit = defineEmits(['picker_close'])

const setCurrentType = (type) => {
    currentType.value = type;
    store.question.type = type;

    switch (currentType) {
        case 'select':
        case 'radio':
            store.question.options = [];
            break;

    }
}

const onSubmit = () => {
    addQuestion(store.question);
    closePicker();
}
const closePicker = () => {
    currentType.value = null;
    emit("picker_close");
}

const addQuestion = (question) => {
    store.addQuestion(question);
    store.question = {
        type: null,
        name: "",
        isRequired: false,
        hasPlaceholder: false,
        placeholderText: "",
        hasSubtitle: false,
        subtitleText: ""
    }
}
</script>