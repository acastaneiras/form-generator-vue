app.component('text-type', {
    template:
        `
        <div>
            <form class="form-generate-text p-4" @submit.prevent="onSubmit">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group m-4">
                            <label for="name">Question name</label>
                            <input type="text" v-model="name" placeholder="Question Name" class="form-control">
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

        }
    },
    methods: {
        onSubmit() {
            let question = {
                name: this.name,
                type: "text"
            };

            this.$emit("question-submitted", question);

            this.name = "";
        }
    }
})