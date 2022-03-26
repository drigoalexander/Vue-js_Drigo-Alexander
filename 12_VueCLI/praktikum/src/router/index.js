import Vue from "vue";
import Router from "vue-router";
import TodoView from "@/views/TodoView.vue";
import DetailsTodo from "@/views/DetailsTodo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: TodoView,
    },
    {
      path: "/:index",
      component: DetailsTodo,
    },
  ],
});
