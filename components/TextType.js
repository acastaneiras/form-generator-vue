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
        <div>
            <form class="form-generate  form-generate-text p-4" @submit.prevent="onSubmit">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group m-4">
                            <label for="name">Question name</label>
                            <input type="text" v-model="question.name" placeholder="Question Name" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <button class="btn btn-secondary mt-4 m-auto d-flex align-self-center"><i class="fa-solid" :class="[{'fa-plus': currentquestion == null},{'fa-edit': currentquestion !== null}]"></i> {{ label }}</button>
                    </div>
                </div>
            </form>
        </div>
    `,
    data() {
        return {
            question: Object.assign({type:"text"}, this.currentquestion)
        }
    },
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
            if (this.currentquestion !== null) {
                this.question.edit = true;
            }
            this.$emit("question-submitted", this.question);
            this.question = {};
        }
    }
})