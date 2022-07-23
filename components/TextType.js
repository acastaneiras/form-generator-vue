app.component('text-type', {
    props: {
        currentquestion: {
            type: [Object, null],
            required: false
        }
    },
    template:
    /*html*/
        `
        <div class="form-group m-4">
            <label for="name">Question name</label>
            <input type="text" v-model="question.name" placeholder="Question Name" class="form-control">
        </div>
    `,
    data() {
        return {
            question: Object.assign({type:"text"}, this.currentquestion),
        }
    },
    watch: { 
        currentquestion: function(newVal, oldVal) { // watch it
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      }
    }
})