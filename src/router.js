import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Login from "./views/LogIn.vue";
import SignUp from "./views/SignUp.vue";
import About from "./views/About.vue";
import Workout from "./views/Workout.vue";
import NotFound from "./views/NotFound.vue";

import { isAuthenticated } from "./helpers/useAuth";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/workout",
    component: Workout,
    beforeEnter: (to, from) => {
      if (isAuthenticated.value) return true;
      return "/login";
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
