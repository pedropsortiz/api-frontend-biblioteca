import IndexViewVue from "@/views/Index/IndexView.vue";
import { createRouter, createWebHistory } from "vue-router";
import AdicionarLivroView from "../views/Livro/AdicionarLivroView.vue";
import LoginView from "../views/Login/LoginView.vue";
import AcervoView from "../views/Acervo/AcervoView.vue";
import NovidadesView from "../views/Novidades/NovidadesView.vue";
import SobreView from "../views/Sobre/SobreView.vue";
import SignUpView from "../views/SignUp/SignUpView.vue";
import AdminView from "../views/Admin/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: IndexViewVue
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/admin/livro/adicionar",
      name: "addlivro",
      component: AdicionarLivroView
    },
    {
      path: "/acervo",
      name: "acervo",
      component: AcervoView
    },
    {
      path: "/novidades",
      name: "novidades",
      component: NovidadesView
    },
    {
      path: "/sobre",
      name: "sobre",
      component: SobreView
    },
    {
      path: "/signup",
      name: "Sign Up",
      component: SignUpView
    },
    {
      path: "/admin",
      name: "Admin",
      component: AdminView
    }
  ],
});

export default router;
