app.component('select-type', {
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
        <div class="form-check form-switch m-4">
            <input class="form-check-input" type="checkbox" :checked="question.hasPunctuation" @change="toggleCheckbox()">
            <label class="form-check-label">Has punctuation?</label>
        </div>
        <div class="form-group m-4">
            <div class="col-md-12 pb-3">
                <label for="options">Question options</label>

                <button @click="addOption" class="btn btn-primary ms-2" type="button">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
            <div v-for="(option, index) in question.options" class="form-option d-flex w-100 pb-2"  :key="index">
                <input type="text" v-model="option.value" placeholder="Option name" class="form-control option-name">
                <input type="number" v-model.number="option.punctuation" v-show="question.hasPunctuation" placeholder="Option value" class="form-control option-punctuation">
                <button @click="removeOption(index)" class="btn btn-danger ms-2" type="button">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    `,
    data() {
        return {
            question: Object.assign({name: "", hasPunctuation: false, type:"select", options: []}, this.currentquestion),
        }
    },
    methods: {
        toggleCheckbox() {
            this.question.hasPunctuation = !this.question.hasPunctuation;
        },
        addOption() {
            this.question.options.push({ value: '', punctuation: 0.00 })
        },
        removeOption(index) {
            this.question.options.splice(index, 1)
        }
    }
})