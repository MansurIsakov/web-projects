const app = Vue.createApp({
  data() {
    return {
      myName: "Mansur Isakov",
      myAge: 18,
      dogImg:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    };
  },
  methods: {
    myAgeIn5Years() {
      return this.myAge + 5;
    },
    favNumber() {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    },
  },
});

app.mount("#assignment");
