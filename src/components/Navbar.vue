<template>
  <div class="navbar mb-2 shadow-lg bg-blue-500 text-content-100">
    <div class="flex-1 px-2 mx-2">
      <div class="text-white font-bold text-3xl">
        <simple-line-icons-note class="inline-block" />
        <p class="inline-block pl-3 tracking-wide">
          Workout<span class="font-thin">Log</span>
        </p>
      </div>
    </div>
    <div class="flex-none flex px-2 mx-2 text-white">
      <div class="flex">
        <router-link
          to="/"
          class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
        >
          <mdi:home />
        </router-link>
        <router-link
          to="/about"
          class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
        >
          <mdi:information-variant />
        </router-link>
        <div v-if="!isAuthenticated">
          <router-link
            to="/login"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            Login <mdi:login />
          </router-link>
          <router-link
            to="/signup"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            SignUp <mdi:pencil />
          </router-link>
        </div>
        <div v-else>
          <router-link
            to="/workout"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            Workout <mdi:weight-lifter />
          </router-link>
          <button
            class="btn btn-error btn-sm rounded-btn hover:text-content-100"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { isAuthenticated, signOut } from "../helpers/useAuth.js";
const router = useRouter();
const logout = async () => {
  await signOut();
  router.push("/about");
};
</script>
