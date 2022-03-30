import Vue from "vue";
import Router from "vue-router";
import TodoView from "@/views/TodoView.vue";
import DetailsTodo from "@/views/DetailsTodo.vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";
import newsView from "@/views/15VueData";
import detailsNews from "@/views/detailNews";
Vue.use(Router);

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "HomeView",
  },

  {
    path: "/News",
    component: newsView,
    name: "newsView",
  },
  {
    path: "/newsDetail",
    component: detailsNews,
    name: "detailsNews",
  },
  {
    path: "/DetailsTodo",
    component: DetailsTodo,
    name: "DetailsTodo",
  },
  {
    path: "/TodoView",
    component: TodoView,
    name: "TodoView",
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
