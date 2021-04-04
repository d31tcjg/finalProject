import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Login from "./views/LogIn.vue";
import About from "./views/About.vue";
import Workout from "./views/Workout.vue";

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
    path: "/about",
    component: About,
  },
  {
    path: "/workout",
    component: Workout,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
