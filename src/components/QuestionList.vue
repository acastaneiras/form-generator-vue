<script>
export default {
    props: [],
    computed: {

    },
    methods: {
        required(question) {
            return question.isRequired ? '<span style="color:red">*</span>' : ''
        },
        questionRender(question) {
            switch (question.type) {
                case "text":
                    return `
                        <input disabled type="text" ${question.isRequired ? 'required' : ''} placeholder="${question.hasPlaceholder ? question.placeholderText : ''}" class="form-input-text mb-1">`
                    break;
                case "select":
                    let select_type = "<select class='form-input-select mb-1'>";
                    question.options.forEach(option => {
                        select_type += `<option>${option.value}</option>`;
                    });
                    select_type += "</select>";

                    return select_type;
                    break;
                case "radio":
                    let radio_type = `<div class="flex  items-center mb-4 w-full">`;
                    question.options.forEach(option => {
                        radio_type += `<div class="mr-3 items-center">
                            <input class="form-input-check" type="radio" disabled>
                            <label for="question-${question.index}" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            ${option.value}
                            </label>
                        </div>
                      `;
                    });
                    radio_type += `</div>`
                    return radio_type;
            }
        }
    }
}
</script>

<template>
    <div
        class="mx-4 mb-6 p-4 pb-10 flex flex-col-reverse items-start sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50 drop-shadow-xl bg-slate-100 border-2 border-slate-300 dark:border-slate-700">
        <div class="mx-auto w-2/3">
            <div class="mb-6" v-show="globalStore.questions.length" v-for="(question, index) in globalStore.questions">
                <h1 class="mb-1 dark:text-slate-300">{{ question.name }} <span class="inline"
                        v-html="required(question)"></span></h1>
                <div v-html="questionRender(question)">
                </div>
                <div class="text-xs text-slate-500">{{ question.hasSubtitle ? question.subtitleText : '' }}</div>

            </div>
        </div>


        <div v-show="!globalStore.questions.length" class="dark:text-gray-400">
            There are no questions created yet.<br>
            <span class="text-sm">Create one by clicking on the <strong
                    class="text-xl justify-center align-middle">+</strong> sign.</span>
        </div>
    </div>
</template>

<script setup>
import { useGlobalStore } from '../stores/store';
const globalStore = useGlobalStore();
</script>