<template>
  <div class="flex flex-col justify-center items-center gap-10">
    <router-view />

    <div class="text-white" v-for="(list, index) in news" :key="index">
      <div
        class="flex flex-col w-auto p-6"
        @click="Redirect(list.urlToImage, list.author, list.description, index)"
      >
        <img v-bind:src="list.urlToImage" alt="" />

        <div class="text-left flex flex-col pt-4 gap-4">
          <h1>
            {{ list.author }}
          </h1>

          <p>
            {{ list.description }}
          </p>
        </div>
      </div>
    </div>

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

<script>
import axios from "axios";

export default {
  name: "newsView",
  data() {
    return {
      news: [],
      //   indexList: ""
    };
  },

  mounted() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2022-03-30&sortBy=popularity&apiKey=05b0cf173740411d872776a4762388b4"
      )
      .then((res) => (this.news = res.data.articles))
      .catch((err) => console.log(err));
  },

  methods: {
    Redirect(urImage, author, description, index) {
      this.$router.push({
        name: "detailsNews",
        params: { url: urImage, authorNews: author, desc: description },
      });

      this.$store.dispatch("fetchNews", {
        url: urImage,
        authorNews: author,
        desc: description,
        indexList: index,
      });
    },
  },

  computed: {
    News() {
      return this.$store.state.news;
    },
  },
};
</script>

<style scoped></style>
