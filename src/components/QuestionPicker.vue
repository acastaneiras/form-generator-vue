<template>
    <div
        class="overflow-y-auto h-full dark:text-gray-300 bg-slate-100 dark:bg-slate-800/50 border-l-2 border-slate-300 dark:border-slate-700">
        <form @submit.prevent="onSubmit">
            <div class="flex h-10 px-4 align-middle w-full m-auto">
                <div v-if="currentType && store.currentIndex == null" class="flex justify-start">
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
                    <li>
                        <label for="checkbox-option" @click="setCurrentType('checkbox')"
                            class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="flex w-full justify-center align-middle">
                                <i class="fa-solid fa-square-check fa-2x"></i>
                                <div class="text-lg font-semibold ml-2">Checkbox</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="number-option" @click="setCurrentType('number')"
                            class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="flex w-full justify-center align-middle">
                                <i class="fa-solid fa-arrow-down-1-9 fa-2x"></i>
                                <div class="text-lg font-semibold ml-2">Number</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="rating-option" @click="setCurrentType('rating')"
                            class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="flex w-full justify-center align-middle">
                                <i class="fa-solid fa-star fa-2x"></i>
                                <div class="text-lg font-semibold ml-2">Rating</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="date-option" @click="setCurrentType('date')"
                            class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="flex w-full justify-center align-middle">
                                <i class="fa-solid fa-calendar-days fa-2x"></i>
                                <div class="text-lg font-semibold ml-2">Date</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="time-option" @click="setCurrentType('time')"
                            class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="flex w-full justify-center align-middle">
                                <i class="fa-solid fa-clock fa-2x"></i>
                                <div class="text-lg font-semibold ml-2">Time</div>
                            </div>
                        </label>
                    </li>

                </ul>
                <component v-for="(questionType, index) in showComponents" :key="index"
                    :is="getComponentByType(questionType.name)">
                </component>
                <div id="question-options" v-show="currentType">
                    <div class="flex flex-col">
                        <div class="w-full mb-6" v-show="typeOptions !== undefined && typeOptions.hasSubtitle">
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
                        <div class="w-full mb-6" v-show="typeOptions !== undefined && typeOptions.hasPlaceholder">
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
                    <div v-html="showActionButton"></div>
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue';
import { useGlobalStore } from '../stores/store';
import Text from "./elements/Text.vue";
import Select from './elements/Select.vue';
import Radio from './elements/Radio.vue';
import Number from './elements/Number.vue';
import Checkbox from './elements/Checkbox.vue';
import Rating from './elements/Rating.vue';
import Time from './elements/Time.vue';
import Date from './elements/Date.vue';

const store = useGlobalStore();
const currentType = ref(null);
const questionTypes = reactive([
    { 'name': 'text', 'hasPlaceholder': true, 'hasSubtitle': true },
    { 'name': 'select', 'hasPlaceholder': true, 'hasSubtitle': true },
    { 'name': 'radio', 'hasPlaceholder': false, 'hasSubtitle': true },
    { 'name': 'number', 'hasPlaceholder': false, 'hasSubtitle': true },
    { 'name': 'checkbox', 'hasPlaceholder': false, 'hasSubtitle': true },
    { 'name': 'rating', 'hasPlaceholder': false, 'hasSubtitle': true },
    { 'name': 'time', 'hasPlaceholder': true, 'hasSubtitle': true },
    { 'name': 'date', 'hasPlaceholder': true, 'hasSubtitle': true },
]);

const emit = defineEmits(['picker_close'])

store.$subscribe((mutation, state) => {
    if (state.currentIndex !== null) currentType.value = state.question.type;
    if (typeof state.question == 'undefined') {
        store.question = {
            type: state.currentIndex,
            name: "",
            isRequired: false,
            hasPlaceholder: false,
            placeholderText: "",
            hasSubtitle: false,
            subtitleText: ""
        }
    }
})


const getComponentByType = (type) => {
    switch (type) {
        case "text":
            return Text;
        case "radio":
            return Radio;
        case "select":
            return Select;
        case "number":
            return Number;
        case "checkbox":
            return Checkbox;
        case "rating":
            return Rating;
        case "time":
            return Time;
        case "date":
            return Date;
    }
}

const setCurrentType = (type) => {
    currentType.value = type;
    store.question.type = type;

    switch (currentType) {
        case 'select':
        case 'radio':
        case 'checkbox':
            store.question.options = [];
            break;

    }
}

const showActionButton = computed(() => {
    if (store.currentIndex === null) return `<i class="fas fa-plus"></i> Add question`;
    return `<i class="fas fa-edit"></i> Edit question`;;
});

const showComponents = computed(() => {
    return questionTypes.filter(function (questionType) {
        return questionType.name == currentType.value;
    })
});

const typeOptions = computed(() => {
    return questionTypes.find(type => {
        return type.name === currentType.value;
    });
});

const resetQuestion = () => {
    store.currentIndex = null;
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

const onSubmit = () => {
    if (typeof store.question.options !== 'undefined') {
        store.question.options.map((el) => {
            el.label = el.value;
            return el;
        });
    }
    if (store.currentIndex === null) {
        addQuestion(store.question);
    }
    else {
        editQuestion(store.question);
    }
    resetQuestion();
    closePicker();
}

const editQuestion = (question) => {
    store.editQuestion(question)
}

const addQuestion = (question) => {
    store.addQuestion(question)
}

const closePicker = () => {
    currentType.value = null;
    emit("picker_close");
}
</script>