const app = Vue.createApp({
    data() {
        return {
            user: "Felhasznalo 1",
            userID: 123,
            userLoggedIn: true,
            count: 0,
<<<<<<< HEAD
            mooseLimit: 0,
=======
            mooses: [],
>>>>>>> 713095d9f7f6be923d6be984961459c1e2f33535
        };
    },
    methods: {
        clickMe() {
            alert("Hello! I am an alert box!!");
        },
        addMoose(number) {
        this.count+=number
<<<<<<< HEAD
        if (this.count==10) { this.mooseLimit= 1 }
=======
        this.mooses+=1

>>>>>>> 713095d9f7f6be923d6be984961459c1e2f33535
        /* the same as this.count=this.count+number */
      }
    },
})

app.mount('#app');