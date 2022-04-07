import axios from "axios";
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
    news: [],
    newsIndex: "",
  },

  getters: {
    todoIndex(state) {
      return state.listTodo[state.indexState];
    },

    newsWithIndex(state) {
      return state.news[state.newsIndex];
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

    setList(state, param) {
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

    fetchList(store) {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=Apple&from=2022-03-30&sortBy=popularity&apiKey=05b0cf173740411d872776a4762388b4"
        )
        .then((res) => {
          store.commit("setList", res.data.articles);
        });
    },

    fetchNews(store, param) {
      let listInd = store.state.newsIndex;
      listInd = param.indexList;
      store.commit("setIndexNews", listInd);
    },
  },
});
