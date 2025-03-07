import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/signin.vue";
import CreateResume from "../views/CreateResume.vue";
import Resume from "../views/Resume.vue";

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
    {
      path: "/create-resume",
      name: "CreateResume",
      component: CreateResume,
    },
    {
      path: "/resume/:id",
      name: "Resume",
      component: Resume,
    },
  ],
});

export default router;
