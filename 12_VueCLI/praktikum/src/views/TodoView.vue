<template class="bg-[#121A27]">
  <div id="app" class="bg-[#121A27] w-full h-full min-h-screen">
    <h1
      class="font-extrabold text-7xl pb-44 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-700"
    >
      Todo List App
    </h1>
    <!--Start id for search by pk -->
    <div class="flex items-center justify-center">
      <input
        type="text"
        v-model="id"
        placeholder="search by id"
        class="w-64 border-2 border-white text-white p-4"
      />
    </div>
    <!--End id for search by pk -->

    <!-- Start Query By PK  -->
    <ApolloQuery
      :query="
        (gql) => gql`
          query MyQuery($id: Int!) {
            messages(where: { id: { _eq: $id } }) {
              Todo
            }
          }
        `
      "
      :variables="{ id: getID }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">
          <div>
            <svg
              role="status"
              class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
        <div v-else-if="error" class="error apollo">An error occurred...</div>
        <div v-else-if="data" class="result apollo">
          <div v-for="messages in data.messages" :key="messages.id">
            <ul class="py-10">
              <li
                class="flex gap-10 justify-center items-center font-bold uppercase"
              >
                <h1
                  class="text-white font-bold hover:text-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
                >
                  {{ messages.Todo }}
                </h1>

                <button
                  class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
                >
                  Delete
                </button>
                <button
                  class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
                >
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div v-else class="no-result apollo">
          <svg
            role="status"
            class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </template>
    </ApolloQuery>

    <!--End Query by pk -->

    <div v-if="!isEditing" class="flex justify-center items-center mx-auto">
      <div class="flex flex-col justify-center items-center">
        <h1 class="self-start pb-4 text-white font-semibold">
          {{ typeLength }}/200
        </h1>
        <input
          class="border-2 border-white px-2 py-1 rounded-md text-white"
          placeholder="Input todo list"
          @keyup.enter="addTodo"
          v-model="value"
        />
      </div>

      <button
        @click="addTodo"
        class="text-white flex ml-6 justify-center items-center self-center font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
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
          class="border-2 border-lime-800 px-2 py-1 rounded-md text-white"
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

    <ApolloQuery
      :query="
        (gql) => gql`
          query MyQuery {
            messages {
              id
              Todo
            }
          }
        `
      "
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">
          <div>
            <svg
              role="status"
              class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
        <div v-else-if="error" class="error apollo">An error occurred...</div>
        <div v-else-if="data" class="result apollo">
          <div v-for="messages in data.messages" :key="messages.id">
            <ul class="py-10">
              <li
                class="flex gap-10 justify-center items-center font-bold uppercase"
              >
                <h1
                  class="text-white font-bold hover:text-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
                >
                  {{ messages.Todo }}
                </h1>

                <button
                  class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
                >
                  Delete
                </button>
                <button
                  class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
                >
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div v-else class="no-result apollo">
          <svg
            role="status"
            class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </template>
    </ApolloQuery>
    <!-- <ul class="py-10">
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
    </ul> -->
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
      id: "",
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

      this.$store.dispatch("updateIndex", {
        listIndex: indexLists,
      });
    },
  },

  computed: {
    getID() {
      return this.id;
    },
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
