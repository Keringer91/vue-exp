const app = Vue.createApp({
    data() {
        return {
            user: "Felhasznalo 1",
            userID: 123,
            userLoggedIn: true,
            count: 0,
            mooses: [],
        };
    },
    methods: {
        clickMe() {
            alert("Hello! I am an alert box!!");
        },
        addMoose(number) {
        this.count+=number
        this.mooses+=1

        /* the same as this.count=this.count+number */
      }
    },
})

app.mount('#app');