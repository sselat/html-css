const MyNameApp = {
    data () {
        return {
            name: "Tales",
            age: 27,
            input_name: ''
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault()
            
            this.name = this.input_name;
        }
    }
}
Vue.createApp(MyNameApp).mount("#app")