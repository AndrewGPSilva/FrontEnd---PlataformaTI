import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomeAulas from "../views/HomeAulas.vue";
import Admin from "../views/Admin.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";
import Aula from "../views/Aula.vue";
import AulaCategory from "../views/AulaCategory.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/aulas",
      name: "aulas",
      component: HomeAulas,
      meta: { requiresAuth: true },
    },
    {
      path: "/aulas/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/:not?/:not?/:not?/:not?",
      name: "notFound",
      component: NotFound,
      meta: { requiresAuth: true },
    },
    {
      path: "/aula/:id",
      name: "Aula",
      component: Aula,
      meta: { requiresAuth: true },
    },
    {
      path: '/aulas/category/:category',
      name: 'AulaCategory',
      component: AulaCategory
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
