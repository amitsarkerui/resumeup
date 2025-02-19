import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/signin.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin,
    },
  ],
});

export default router;
