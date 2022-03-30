<template>
  <div class="flex flex-col justify-center items-center gap-10">
    <router-view />

    <div class="flex flex-col w-auto p-6 text-white">
      <img v-bind:src="ImgUrl" alt="" />

      <div class="text-left flex flex-col pt-4 gap-4">
        <h1>
          {{ Author }}
        </h1>

        <p>
          {{ Description }}
        </p>
      </div>
    </div>

    <div class="">
      <button
        @click="$router.push({ path: '/News' })"
        class="text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
      >
        move back
      </button>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "newsView",
  data() {
    return {
      author: "",
      imgUrl: "",
      description: "",
    };
  },

  created() {
    this.author = this.$route.params.authorNews;
    this.imgUrl = this.$route.params.url;
    this.description = this.$route.params.desc;
  },

  computed: {
    News() {
      return this.$store.state.news;
    },

    Author() {
      return this.$store.getters.author;
    },

    ImgUrl() {
      return this.$store.getters.imgUrl;
    },

    Description() {
      return this.$store.getters.description;
    },
  },
};
</script>

<style scoped></style>
