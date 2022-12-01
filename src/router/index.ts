import { createRouter, createWebHistory } from "vue-router";
import AdicionarLivroView from "../views/Livro/AdicionarLivroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: "",
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: "",
    },
    {
      path: "/admin/livro/adicionar",
      name: "AdicionarLivro",
      component: AdicionarLivroView
    },
  ],
});

export default router;
