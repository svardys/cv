import { createRouter, createWebHistory } from "vue-router";
import HomeDark from "../views/HomeDark.vue";
import NotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "HomeDark",
    component: HomeDark,
    meta: {
      title: "Resumé - Jaroslav Švardala",
    },
  },
  {
    path: "/home-light",
    name: "HomeLight",
    component: () => import("../views/HomeLight.vue"),
    meta: {
      title: "Resumé - Jaroslav Švardala",
    },
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
    meta: {
      title: "Not Found || Jaroslav Švardala",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
  window.scrollTo(0, 0);
});

export default router;
