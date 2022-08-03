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
            }, {
                "type": "text",
                "name": "Question 2",
                "isRequired": true,
                "hasPlaceholder": true,
                "placeholderText": "Placeholder text",
                "hasSubtitle": true,
                "subtitleText": "Subtitle Instructions"
            }],
            question: {
                type: null,
                name: "",
                isRequired: false,
                hasPlaceholder: false,
                placeholderText: "",
                hasSubtitle: false,
                subtitleText: ""
            },
        }
    },
    actions: {
        setCurrentIndex(index) {
            this.currentIndex = index;
        },
        addQuestion(question) {
            this.questions.push(question);
        },
        deleteQuestion(index) {
            this.questions.splice(index, 1)
        }
    }
})