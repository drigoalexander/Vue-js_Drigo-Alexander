import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isEditing: false,
    todo: [],
    value: "",
    isDone: [],
    indexEdit: "0",
  },

  getters: {},

  actions: {},

  mutations: {
    setTodo(state, value) {
      state.todo = value;
    },
  },
});
