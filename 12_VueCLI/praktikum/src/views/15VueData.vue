<template class="">
  <v-app dark>
    <side-menu :articles="News" />
    <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">News App</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <cardnews
          :articles="News"
          @click="
            Redirect(list.urlToImage, list.author, list.description, index)
          "
        ></cardnews>
      </v-container>
    </v-content>
  </v-app>

  <!-- <div class="flex flex-col justify-center items-center gap-10">
    <router-view />

    <div class="text-white" v-for="(list, index) in News" :key="index">
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
  </div> -->
</template>

<script>
// import axios from "axios";
import cardnews from "../components/cardNews.vue";
import sideMenu from "../components/sideMenu.vue";

export default {
  name: "newsView",
  components: {
    cardnews,
    sideMenu,
  },

  data() {
    return {
      news: [],
      drawer: false,
      //   indexList: ""
    };
  },

  mounted() {
    this.fetchList();
  },

  methods: {
    Redirect(urImage, author, description, index) {
      this.$router.push({
        name: "detailsNews",
        params: { url: urImage, authorNews: author, desc: description },
      });

      this.$store.dispatch("fetchNews", {
        indexList: index,
      });
    },

    fetchList() {
      this.$store.dispatch("fetchList");
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
