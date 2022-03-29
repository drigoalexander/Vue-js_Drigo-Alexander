import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
// import * as Cookies from "js-cookie";

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
  },

  getters: {
    todoIndex(state) {
      return state.listTodo[state.indexState];
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
  },
});
