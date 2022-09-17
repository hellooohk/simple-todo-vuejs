Vue.createApp({
  data() {
    return {
      todos: [
        { id: Math.floor(Math.random() * 100000) + 1, content: "Excercise" },
        { id: Math.floor(Math.random() * 100000) + 1, content: "Learn Vue" },
        { id: Math.floor(Math.random() * 100000) + 1, content: "Practise DSA" },
      ],
      inputField: "",
    };
  },
  methods: {
    handleChange(event) {
      this.inputField = event.target.value;
    },
    add() {
      if (this.inputField === "") return;
      todoItem = {
        id: Math.floor(Math.random() * 100000) + 1,
        content: this.inputField,
      };
      this.todos.push(todoItem);
      this.inputField = "";
    },
    handleDelete(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  },
}).mount("#app");
