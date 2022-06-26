app.component('select-type', {
    template:
        /*html*/
        `
        <div>
            <form class="form-generate-select p-4" @submit.prevent="onSubmit">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group m-4">
                            <label for="name">Question name</label>
                            <input type="text" v-model="name" placeholder="Question Name" class="form-control">
                        </div>
                        <div class="form-check form-switch m-4">
                            <input class="form-check-input" type="checkbox" @change="hasPunctuation = !hasPunctuation">
                            <label class="form-check-label">Has punctuation?</label>
                        </div>
                        <div class="form-group m-4">
                            <div class="col-md-12 pb-3">
                                <label for="options">Question options</label>

                                <button @click="addOption" class="btn btn-primary ms-2" type="button">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <div v-for="(option, index) in options" class="form-option d-flex w-100 pb-2"  :key="index">
                                <input type="text" v-model="option.value" placeholder="Option name" class="form-control option-name">
                                <input type="number" v-model.number="option.punctuation" v-show="hasPunctuation" placeholder="Option value" class="form-control option-punctuation">
                                <button @click="removeOption(index)" class="btn btn-danger ms-2" type="button">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="row">


                    <div class="col-md-12">
                        <button class="btn btn-secondary mt-4 m-auto d-flex align-self-center"><i class="fa-solid fa-plus"></i> Add question</button>
                    </div>
                </div>
            </form>
        </div>
    `,
    data() {
        return {
            name: "",
            hasPunctuation: false,
            options: []
        }
    },
    methods: {
        addOption() {
            this.options.push({ value: '', punctuation: 0.00 })
        },
        removeOption(index) {
            this.options.splice(index, 1)
        }
        ,
        onSubmit() {
            let question = {
                name: this.name,
                type: "select",
                hasPunctuation: this.hasPunctuation,
                options: this.options
            };

            this.$emit("question-submitted", question);

            this.name = "";
            this.options = [];
        }
    }
})