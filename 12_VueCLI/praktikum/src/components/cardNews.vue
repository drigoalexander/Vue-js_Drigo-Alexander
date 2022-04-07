<template>
  <v-layout row wrap align-center>
    <v-flex xs8 offset-md2 class="d-flex flex-column">
      <div v-for="(article, index) in articles" :key="index">
        <v-card class="my-3" hover>
          <v-img height="350px" v-bind:src="article.urlToImage"></v-img>
          <v-card-media>
            <v-container fill-height fluid>
              <v-layout>
                <v-flex xs12 align-end d-flex>
                  <span class="headline">{{ article.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-text>
            {{ article.description }}
          </v-card-text>
          <v-card-actions>
            <v-chip small color="secondary" class="white--text">
              {{ article.source.name }}
            </v-chip>
            <v-spacer></v-spacer>
            <v-btn icon class="red--text">
              <v-icon small>fa-reddit</v-icon>
            </v-btn>
            <v-btn icon class="light-blue--text">
              <v-icon small>fa-twitter</v-icon>
            </v-btn>
            <v-btn icon class="blue--text text--darken-4">
              <v-icon small>fa-facebook</v-icon>
            </v-btn>
            <v-btn icon class="red--text">
              <v-icon small>fa-google-plus</v-icon>
            </v-btn>
            <v-btn icon class="blue--text text--darken-4">
              <v-icon small>fa-linkedin</v-icon>
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn
              small
              replace
              color="info"
              @click="
                Redirect(
                  articles.urlToImage,
                  articles.author,
                  articles.description,
                  index
                )
              "
              >Read More</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    articles: Array,
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
