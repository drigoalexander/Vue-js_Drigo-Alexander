<template>
  <div id="app">
    <div
      v-if="!isEditing"
      class="flex justify-center items-center gap-x-4 text-xl"
    >
      <!-- <h1>asdzxc</h1> -->
      <input
        class="border-2 border-lime-800 px-2 py-1 rounded-md"
        placeholder="Input todo list"
        @keyup.enter="addTodo"
        v-model="value"
      />
      <h1>{{ typeLength }}/200</h1>
      <button @click="addTodo">ADD</button>
    </div>

    <div v-else class="flex justify-center items-center gap-x-4 text-xl">
      <input
        class="border-2 border-lime-800 px-2 py-1 rounded-md"
        placeholder="update todo list"
        @keyup.enter="addTodo"
        type="text"
        v-model="value"
      />
      <h1>{{ typeLength }}/200</h1>
      <button @click="updateTodo">Update</button>
    </div>

    <ul class="py-10">
      <li
        type="1"
        v-for="(list, index) in todo"
        :key="list"
        class="flex gap-4 justify-center items-center font-bold uppercase"
      >
        <router-link
          to="/DetailsTodo"
          class="underline decoration-solid decoration-white hover:decoration-lime-600 transition duration-300 decoration-2"
        >
          {{ list }}
        </router-link>

        <button v-on:click="deleteList(index)">Delete</button>
        <button v-on:click="editTodo(index, list)">Edit</button>
        <button v-on:click="checkDone(index)">Done</button>
      </li>
    </ul>
    <p v-if="todo.length >= 4">Hebat!</p>
  </div>
</template>
<script src="https://cdn.tailwindcss.com"></script>
<script>
export default {
  name: "app",
  data() {
    return {
      isEditing: false,
      todo: [],
      value: "",
      isDone: [],
      indexEdit: "0",
    };
  },
  methods: {
    addTodo: function () {
      if (this.value === "" || this.value === null) alert("Fill the box");
      else {
        this.todo.push(this.value);
        this.isDone.push(false);
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

    checkDone(index) {
      console.log(index + ":" + this.isDone[index]);
      if (this.isDone[index] == false) {
        this.isDone[index] = true;
      } else this.isDone[index] = false;

      console.log(index + ":" + this.isDone[index]);
    },
  },

  computed: {
    typeLength() {
      return this.value.length;
    },
  },
};
</script>

<style scoped>
/* input:focus {
  outline: none !important;
  border: solid #41b883;
  transition: border 1s;
} */
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
