<template>
  <div>
    <div v-if="!isEditing">
      <input @keyup.enter="addTodo" v-model="value" />
      <button @click="addTodo">add</button>
    </div>

    <div v-else>
      <input @keyup.enter="addTodo" type="text" v-model="value" />
      <button @click="updateTodo">Update</button>
    </div>
    <ul>
      <li type="1" v-for="(list, index) in todo" :key="list">
        {{ list }}
        <button v-on:click="deleteList(index)">Delete</button>
        <button v-on:click="editTodo(index, list)">Edit</button>
      </li>
    </ul>
    <p v-if="todo.length >= 4">Hebat!</p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      isEditing: false,
      todo: [],
      value: "",
      indexEdit: "0",
    };
  },
  methods: {
    addTodo: function () {
      if (this.value === "" || this.value === null) alert("Fill the box");
      else {
        this.todo.push(this.value);
        this.value = "";
      }
    },

    deleteList: function (index) {
      this.todo.splice(index, 1);
    },

    editTodo: function (index, value) {
      this.value = value;
      this.indexEdit = index;
      this.isEditing = true;
    },

    updateTodo() {
      this.todo.splice(this.indexEdit, 1, this.value);
      this.value = "";
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none !important;
  border: solid #41b883;
  transition: border 1s;
}
button {
  background-color: #41b883;
  border: none;
  width: auto;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
}

button:hover {
  background-color: #34495e;
  color: white;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

ul li {
  padding: 10px;
}
</style>
