const app = Vue.createApp({
    data() {
        return {
            appTitle: 'Form Generator',
            renderPicker: false,
            currentType: null,
            currentQuestion: null,
            currentIndex: null,
            questions: [{name: "Question 1", type: "text"}],
        }
    },
    methods: {
        debug (event) {
          console.log(event.target.name)
        },
        resetApp() {
            this.renderPicker = false;
            this.currentType = null;
            this.currentQuestion = null;
            this.currentIndex = null;
        },
        addQuestion(question) { 
            console.log(question)
            if (question.hasOwnProperty('index')) { //Edit
                this.questions[question.index] = question; 
            } else { //Add
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