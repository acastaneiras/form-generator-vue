import {
    defineStore
} from 'pinia';


export const useGlobalStore = defineStore('store', {
    state: () => {
        return {
            questions: [{
                "type": "text",
                "name": "Question 1",
                "isRequired": true,
                "hasPlaceholder": true,
                "placeholderText": "Placeholder text",
                "hasSubtitle": true,
                "subtitleText": "Subtitle Instructions"
            }],
        }
    },
    actions: {
        addQuestion(question) {
            this.questions.push(question);
        }
    }
})