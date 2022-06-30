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
    <div>
        <div v-for="(question, index) in questions" :key="index" class="question-preview-container pb-4">
            <h5 class="question-preview-title">{{question.name}}</h5>
            <h6>Type: {{question.type}}</h6>

            <div v-if="question.options">
                <label>Has punctuation: <i class="fa-solid" :class="[{ 'fa-check text-success': question.hasPunctuation}, { 'fa-times text-danger': !question.hasPunctuation} ]"></i> </label>
                <ul>
                    <li v-for="option in question.options">
                        {{option.value}}

                        <span v-if="question.hasPunctuation"> <i class="fa-solid fa-star"></i> {{option.punctuation}}</span>
                    </li>
                </ul>
            </div>
            <div>
                <button class="btn btn-primary me-1" type="button" v-on:click="editQuestion(question, index)"><i class="fa-solid fa-edit"></i> Edit</button>
                <button class="btn btn-danger" type="button" v-on:click="deleteQuestion(index)"><i class="fa-solid fa-trash"></i> Delete</button>
            </div>
        </div>
    </div>
    `,
    methods: {
        editQuestion(question, index) {
            question.index = index;
            this.$emit("edit-call", question);
        },
        deleteQuestion(index) {
            this.$emit("delete-call", index);
        }
    }
})