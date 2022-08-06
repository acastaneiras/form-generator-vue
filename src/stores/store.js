import {
    defineStore
} from 'pinia';

export const useGlobalStore = defineStore('store', {
    state: () => {
        return {
            questions: [{
                "id": 1,
                "type": "text",
                "name": "Question 1",
                "isRequired": true,
                "hasPlaceholder": true,
                "placeholderText": "Placeholder text",
                "hasSubtitle": true,
                "subtitleText": "Subtitle Instructions",
            }, {
                "id": 2,
                "type": "text",
                "name": "Question 2",
                "isRequired": true,
                "hasPlaceholder": true,
                "placeholderText": "Placeholder text",
                "hasSubtitle": true,
                "subtitleText": "Subtitle Instructions",
            }],
            question: {
                type: null,
                name: "",
                isRequired: false,
                hasPlaceholder: false,
                placeholderText: "",
                hasSubtitle: false,
                subtitleText: "",
            },
            currentIndex: null
        }
    },
    actions: {
        setCurrentIndex(index) {
            this.currentIndex = index;

            this.question = {...this.questions[index]};
            if (typeof this.question.options !== 'undefined') {
                this.question.options = [...this.question.options]
            }
        },
        addQuestion(question) {
            question.id = this.questions.length + 1;
            this.questions.push(question);
        },
        editQuestion(question) {
            this.questions[this.currentIndex] = question;
        },
        deleteQuestion(index) {
            this.questions.splice(index, 1);
        }
    }
})