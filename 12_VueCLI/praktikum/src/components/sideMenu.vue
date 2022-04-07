<template>
  <v-navigation-drawer fixed app clipped class="drawer-style" id="style-1">
    <div v-for="(article, index) in articles" :key="index">
      <v-list dense class="pt-3 white--black">
        <v-list-tile>
          <v-list-tile-action>
            <v-avatar size="32px">
              <h1 class="text-black">
                <!-- {{ article.source.name }} -->
              </h1>
            </v-avatar>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              <h2 class="text-black">
                {{ article.source.name }}
              </h2></v-list-tile-title
            >
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    articles: Array,
  },

  computed: {
    News() {
      return this.$store.state.news;
    },
  },
};
</script>
