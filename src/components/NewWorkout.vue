<template>
  <section
    class="container flex items-center justify-center text-center bg-blue-500 rounded-xl mx-auto mt-5 max-w-md p-5"
  >
    <div
      class="grid grid-flow-col grid-cols-1 grid-rows-3 text-left text-white"
    >
      <div>
        <h1 class="text-center text-2xl">Input Workout</h1>
      </div>
      <div>
        <div class="text-center"><label>Workout Description</label></div>
        <div>
          <input v-model="newWorkout" type="text" class="rounded text-black" />
        </div>
      </div>

      <div class="flex mx-auto bg-yellow-300 mt-5 px-3">
        <button @click="send" class="text-2xl text-center text-black">
          <mdi:new-box />
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { database } from "../helpers/useAuth";

const { inputWorkout } = database();

const newWorkout = ref(null);

const send = () => {
  if (newWorkout.value?.length > 0) {
    inputWorkout(newWorkout.value);
    newWorkout.value = null;
  }
};
</script>
