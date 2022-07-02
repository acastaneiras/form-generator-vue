const app = Vue.createApp({
    data() {
        return {
            appTitle: 'Form Generator',
            renderPicker: false,
            currentType: null,
            currentQuestion: null,
            currentIndex: null,
            questions: [{name: "Question 1", type: "text"}, {name: "Question 2", type: "text"}, {name: "Question 3", type: "text"}],
        }
    },
    methods: {
        debug (event) {
          console.log(event.target.name)
        },
        moveUp(index) { 
            let destination = index - 1;
            let question = this.questions.splice(index, 1)[0];
            this.questions.splice(destination, 0, question);
        },
        moveDown(index) {
            let destination = index +1;
            let question = this.questions.splice(index, 1)[0];
            this.questions.splice(destination, 0, question);
        },
        resetApp() {
            this.renderPicker = false;
            this.currentType = null;
            this.currentQuestion = null;
            this.currentIndex = null;
        },
        addQuestion(question) { 
            if (question.hasOwnProperty('index')) {
                this.questions[question.index] = question; 
            } else {
                this.questions.push(question);
            }
            this.resetApp();
        },
        editQuestion(question) {
            this.currentQuestion = question;
            this.renderPicker = true;
            this.currentType = question.type;
        },
        deleteQuestion(index) {
            this.questions.splice(index, 1);
        }
      } 
})