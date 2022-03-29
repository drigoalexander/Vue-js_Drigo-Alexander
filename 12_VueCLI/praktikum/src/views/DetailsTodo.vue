<template>
  <div
    class="w-screen h-full bg-[#121A27] flex flex-col justify-center items-center"
  >
    <!-- <p>{{ items }}</p> -->
    <h1
      class="uppercase font-extrabold text-5xl pb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-700"
    >
      {{ lists }}
    </h1>

    <div class="flex justify-center items-center gap-10">
      <button
        v-if="!isCancel"
        @click="changeTodo"
        class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
      >
        Ubah Deskripsi
      </button>

      <button
        v-if="isCancel"
        @click="cancelUpdate"
        class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
      >
        Cancel
      </button>

      <div v-if="isEditing" class="flex flex-col justify-end items-end gap-y-3">
        <input
          class="border-2 border-lime-800 px-2 py-1 rounded-md"
          placeholder="Update todo list"
          type="text"
          v-model="newText"
          @keyup.enter="updateTodo"
        />
        <button
          @click="updateTodo"
          class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
        >
          Update
        </button>
      </div>
    </div>

    <div class="absolute bottom-10">
      <button
        @click="$router.push({ path: '/TodoView' })"
        class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
      >
        move back
      </button>
    </div>
  </div>
</template>

<script>
// console.log(this.$router.params.list);
export default {
  name: "DetailsTodo",
  data() {
    return {
      isCancel: false,
      isEditing: false,
      todo: "",
      indexs: "",
      newText: "",
    };
  },

  created() {
    this.todo = this.$route.params.item;
    this.indexs = this.$route.params.indList;
  },

  methods: {
    changeTodo() {
      this.isEditing = true;
      this.isCancel = true;
    },

    updateTodo() {
      this.$store.dispatch("updateTodo", {
        indexList: this.indexs,
        Word: this.newText,
      });

      this.isEditing = false;
      this.isCancel = false;
    },

    cancelUpdate() {
      this.isEditing = false;
      this.isCancel = false;
    },
  },

  computed: {
    lists() {
      return this.$store.getters.todoIndex;
    },
  },
};
</script>

<style scoped></style>
