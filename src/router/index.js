import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue";
import addNewMovie from "@/views/add-new-movie.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/soso",
      name: "Home",
      component: home,
    },
    {
      path: "/add-new-movie",
      name: "add-new",
      component: addNewMovie,
    },
  ],
});

export default router;
