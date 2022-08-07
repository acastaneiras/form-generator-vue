<template>
    <div
        class="mx-4 mb-6 p-4 pb-10 flex flex-col-reverse items-start sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50 drop-shadow-xl bg-slate-100 border-2 border-slate-300 dark:border-slate-700">
        <div class="mx-auto w-2/3">
            <div class="mb-6" v-show="store.questions.length" v-for="(question, index) in store.questions">
                <div @mouseover="showActions = index" @mouseleave="showActions = false">
                    <h1 class="items-center mb-1 py-2 h-10 dark:text-slate-300">{{ question.name }} <span class="inline"
                            v-html="required(question)"></span>
                        <div :class="{ 'inline-flex': showActions === index }" class="ml-2"
                            v-show="showActions === index">
                            <button @click="editQuestion(index)" class="btn-app"><i
                                    class="fa-solid fa-pen-to-square"></i></button>
                            <button @click="deleteQuestion(index)"
                                class="btn-app hover:text-red-700 dark:hover:text-red-700"><i
                                    class="fas fa-trash"></i></button>
                        </div>
                    </h1>
                    <component 
                    class="mb-1"
                    :is="getComponentByType(question.type)"
                    :currentQuestion="question"></component>
                    <div class="text-xs text-slate-500">{{ question.hasSubtitle ? question.subtitleText : '' }}</div>
                </div>
            </div>
        </div>


        <div v-show="!store.questions.length" class="dark:text-gray-400">
            There are no questions created yet.<br>
            <span class="text-sm">Create one by clicking on the <strong
                    class="text-xl justify-center align-middle">+</strong> sign.</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TextElement from '../components/render/TextElement.vue'
import RadioElement from './render/RadioElement.vue';
import SelectElement from './render/SelectElement.vue';
import NumberElement from './render/NumberElement.vue';
import CheckboxElement from './render/CheckboxElement.vue';

import { useGlobalStore } from '../stores/store';

const store = useGlobalStore();
const showActions = ref(false);

const getComponentByType = (type) => {
    switch (type) {
        case "text":
            return TextElement;
        case "radio":
            return RadioElement;
        case "select":
            return SelectElement;
        case "checkbox":
            return CheckboxElement;
        case "number":
            return NumberElement;
    }
}

const required = (question) => {
    return question.isRequired ? '<span style="color:red">*</span>' : ''
}

const editQuestion = (index) => {
    store.setCurrentIndex(index);
}

const deleteQuestion = (index) => {
    store.deleteQuestion(index);
}
</script>