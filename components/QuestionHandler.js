app.component('question-handler', {
    props: {
        currentquestion: {
            type: [Object, null],
            required: false
        },
        question_type: {
            type: [String, null],
            required: true
        }
    },
    template:
    /*html*/
    `
    <div>

        
        <div v-show="question_type !== null">
            <form class="form-generate  form-generate-text p-4" @submit.prevent="onSubmit">
                <div class="row">
                    <div class="col-md-12">
                        <text-type v-if="question_type == 'text'" :currentquestion="currentquestion" ref="questiondata"></text-type>
                        <select-type v-if="question_type == 'select'" :currentquestion="currentquestion" ref="questiondata"></select-type>
                        <radio-type v-if="question_type == 'radio'" :currentquestion="currentquestion" ref="questiondata"></radio-type>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <button class="btn btn-secondary mt-4 m-auto d-flex align-self-center"><i class="fa-solid" :class="[{'fa-plus': currentquestion == null},{'fa-edit': currentquestion !== null}]"></i> {{ label }}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    `,
    computed: {
        label() {
            if (this.currentquestion !== null) {
                return "Edit question";
            } else {
                return "Add question";
            }
        },
        buttonIcon() {
            if (this.currentquestion !== null) {
                return "fa-edit";
            } else {
                return "fa-plus";
            }
        }
    },
    methods: {
          onSubmit() {
            
            let question = this.$refs.questiondata.question;
            if (this.currentquestion !== null) {
                question.edit = true;
            }

            this.$emit("question-submitted", question);
        }

    }
})