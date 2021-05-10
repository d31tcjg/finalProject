<template>
  <NewWorkout />
  <workout v-for="(w, index) in workouts" :key="index" :workout="w" />
</template>

<script setup>
import { database } from "../helpers/useAuth";
const { workouts } = database();
</script>
