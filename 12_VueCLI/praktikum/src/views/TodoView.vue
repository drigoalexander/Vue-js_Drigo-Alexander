<template class="bg-[#121A27]">
  <div id="app" class="bg-[#121A27] w-full h-full min-h-screen">
    <h1
      class="font-extrabold text-7xl pb-44 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-700"
    >
      Todo List App
    </h1>

    <div
      v-if="!isEditing"
      class="flex justify-center items-center gap-x-4 text-xl"
    >
      <div class="flex flex-col justify-center items-center">
        <h1 class="self-start pb-4 text-white font-semibold">
          {{ typeLength }}/200
        </h1>
        <input
          class="border-2 border-lime-800 px-2 py-1 rounded-md"
          placeholder="Input todo list"
          @keyup.enter="addTodo"
          v-model="value"
        />
      </div>

      <button
        @click="addTodo"
        class="text-white ml-6 flex justify-end items-end self-end font-bold border-b border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
      >
        ADD
      </button>
    </div>

    <div v-else class="flex justify-center items-center gap-x-4 text-xl">
      <div class="flex flex-col justify-center items-center">
        <h1 class="self-start pb-4 text-white font-semibold">
          {{ typeLength }}/200
        </h1>
        <input
          class="border-2 border-lime-800 px-2 py-1 rounded-md"
          placeholder="Input todo list"
          @keyup.enter="updateTodo"
          v-model="value"
        />
      </div>
      <button
        @click="updateTodo"
        class="text-white ml-6 flex justify-end items-end self-end font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
      >
        Update
      </button>
    </div>

    <ul class="py-10">
      <li
        type="1"
        v-for="(list, index) in $store.state.listTodo"
        :key="index"
        class="flex gap-10 justify-center items-center font-bold uppercase"
      >
        <h1
          @click="Redirect(list, index)"
          class="text-white font-bold hover:text-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
        >
          {{ list }}
        </h1>

        <button
          v-on:click="deleteList(index)"
          class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
        >
          Delete
        </button>
        <button
          v-on:click="editTodo(index, list)"
          class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
        >
          Edit
        </button>
      </li>
    </ul>
    <p v-if="todo.length >= 4">Hebat!</p>

    <div class="">
      <button
        @click="$router.push({ path: '/' })"
        class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
      >
        move back
      </button>
    </div>
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
        this.$store.dispatch("addList", { isi: this.value });
        this.value = "";
      }
    },

    deleteList: function (index) {
      this.$store.dispatch("deleteLists", { urutan: index });
    },

    editTodo: function (index, value) {
      this.value = value;
      this.indexEdit = index;
      this.isEditing = true;
    },

    updateTodo() {
      this.$store.dispatch("updateTodo", {
        indexList: this.indexEdit,
        Word: this.value,
      });

      this.value = "";
      this.isEditing = false;
    },

    Redirect(todosList, indexLists) {
      this.$router.push({
        name: "DetailsTodo",
        params: { item: todosList, indList: indexLists },
      });
    },
  },

  computed: {
    typeLength() {
      return this.value.length;
    },

    list() {
      return this.$store.state.listTodo;
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
