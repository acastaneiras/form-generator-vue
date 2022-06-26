const app = Vue.createApp({
    data() {
        return {
            appTitle: 'Form Generator',
            renderPicker: false,
            currentType: null,
            questions: [{name: "Question 1", type: "text"}]
        }
    },
    methods: {
        debug (event) {
          console.log(event.target.name)
        },
        resetApp() {
            this.renderPicker = false;
            this.currentType = null;
        },
        addQuestion(question) {
            this.questions.push(question);
            this.resetApp();
        }
      } 
})