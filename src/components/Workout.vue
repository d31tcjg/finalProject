<template>
  <div class="container mx-auto flex bg-blue-500 my-4">
    <div>
      <mdi:weight-lifter class="bg-white h-12 w-12" />
    </div>
    <div class="flex flex-grow">
      <div
        class="flex flex-grow items-center justify-between mx-4 font-thin text-xl text-white"
      >
        <p class="text-white text-center pl-24">{{ workout.text }}</p>
        <p class="text-sm italic">{{ workout.userName }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, computed } from "vue";
import { authentication } from "../helpers/useAuth";

const { user } = authentication();

const isUser = computed(() => user.value.uid === props.workout.userId);

const props = defineProps({
  workout: {
    type: Object,
    default: () => ({
      userName: "",
      userId: "",
      text: "",
      createdAt: "",
    }),
  },
});
</script>
