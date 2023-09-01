const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            isNegative: "text-success",
        }
    },
    methods: {
        decrement() {
            this.counter--;
            this.setTextColor();
        },
        increment() {
            this.counter++;
            this.setTextColor();
        },
        setTextColor() {
            if (this.counter >= 0)
                this.isNegative = "text-success";
            else
                this.isNegative = "text-danger";
        }
    },
});

app.mount("#app");