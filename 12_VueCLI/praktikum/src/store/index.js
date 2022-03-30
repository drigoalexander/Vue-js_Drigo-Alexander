import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
// import * as Cookies from "js-cookie";\
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],

  state: {
    listTodo: [],
    indexState: "",
    news: [
      {
        author: "",
        imgUrl: "",
        description: "",
      },
    ],
    newsIndex: "",
  },

  getters: {
    todoIndex(state) {
      return state.listTodo[state.indexState];
    },

    author(state) {
      return state.news.author[state.newsIndex];
    },

    imgUrl(state) {
      return state.news.imgUrl[state.newsIndex];
    },

    description(state) {
      return state.news.description[state.newsIndex];
    },
  },

  mutations: {
    setTodo(state, param) {
      state.listTodo = param;
    },

    setDelete(state, param) {
      state.listTodo = param;
    },

    setUpdate(state, param) {
      state.listTodo = param;
    },
    setIndex(state, param) {
      state.indexState = param;
    },
    setIndexNews(state, param) {
      state.newsIndex = param;
    },
    setNews(state, param) {
      state.news = param;
    },
  },

  actions: {
    addList(store, param) {
      const addToList = store.state.listTodo;
      addToList.push(param.isi);
      store.commit("setTodo", addToList);
    },

    deleteLists(store, param) {
      const deleteFromList = store.state.listTodo;
      deleteFromList.splice(param.urutan, 1);
      store.commit("setDelete", deleteFromList);
    },

    updateTodo(store, param) {
      const updateList = store.state.listTodo;
      updateList.splice(param.indexList, 1, param.Word);
      store.commit("setUpdate", updateList);
    },
    updateIndex(store, param) {
      let indexes = store.state.index;
      indexes = param.listIndex;
      store.commit("setIndex", indexes);
    },

    fetchNews(store, param) {
      const listNewses = store.state.news;
      let listInd = store.state.newsIndex;

      (listInd = param.indexList),
        listNewses.push({
          author: param.authorNews,
          imgUrl: param.url,
          description: param.desc,
        });
      store.commit("setNews", listNewses);
      store.commit("setIndexNews", listInd);
    },
  },
});
