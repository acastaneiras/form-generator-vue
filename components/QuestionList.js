app.component('question-list', {
    props: {
        questions: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="question-container">
        <div v-for="(question, index) in questions" :key="index" class="card shadow bg-light question-preview-container mb-4">
            
            <div class="card-header">
                <h5 class="question-preview-title text-center">
                    {{question.name}}
                </h5>
                <h6 class="text-center" v-if="question.options">
                    <label>Has punctuation: <i class="fa-solid" :class="[{ 'fa-check text-success': question.hasPunctuation}, { 'fa-times text-danger': !question.hasPunctuation} ]"></i> </label>
                </h6>
            </div>
            <div class="card-body">
                <div v-html="questionRender(question)"></div>
            </div>

            <div class="card-footer">
                <div class="float-start">
                    <a v-show="index !== 0" class="text-decoration-none text-muted me-1" v-on:click="moveUp(index)" type="button"><i class="fa-solid fa-chevron-up"></i> </a>
                    <a v-show="index !== questions.length -1" class="text-decoration-none text-muted" v-on:click="moveDown(index)" type="button"><i class="fa-solid fa-chevron-down"></i></a>
                </div>
                <div class="float-end">
                    <a class="text-decoration-none text-primary me-1" type="button" v-on:click="editQuestion(question, index)"><i class="fa-solid fa-edit"></i> Edit</a>
                    <a class="text-decoration-none text-danger" type="button" v-on:click="deleteQuestion(index)"><i class="fa-solid fa-trash"></i> Delete</a>
                </div>
            </div>
            
        </div>
    </div>
    `,
    methods: {
        moveUp(index) {
            this.$emit("go-up-call", index);
        },
        moveDown(index) {
            this.$emit("go-down-call", index);
        },
        editQuestion(question, index) {
            question.index = index;
            this.$emit("edit-call", question);
        },
        deleteQuestion(index) {
            this.$emit("delete-call", index);
        },
        questionRender(question) {
            switch (question.type) {
                case "text":
                    return "<input type='text' class='form-control' disabled />";
                    break;
                case "select":
                    let select_type ="<select class='form-control'>";
                    question.options.forEach(option => {
                        select_type += `<option>${option.value}</option>`;
                    });
                    select_type += "</select>";

                    return select_type;
                    break;
                case "radio":
                    let radio_type = "";
                    question.options.forEach(option => {
                        radio_type += `<div class="form-check">
                        <input class="form-check-input" type="radio">
                        <label class="form-check-label">
                          ${option.value}
                        </label>
                      </div>`;
                    });
                    return radio_type;
            }
        }
    }
})