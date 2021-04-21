<template>
  <div class="bg-blue-500 p-4">
    <div
      class="flex-place-items-center space-x-2 text-white font-bold text-3xl container mx-auto grid grid-cols-2"
    >
      <div class=" ">
        <simple-line-icons-note class="inline-block" />
        <p class="inline-block pl-3 tracking-wide">
          Workout<span class="font-thin">Log</span>
        </p>
      </div>
      <div class="container">
        <div
          class="float-right content-end grid grid-flow-col-dense auto-cols-min"
        >
          <div>
            <router-link to="/"><mdi:home /></router-link>
          </div>
          <div>
            <router-link to="/about"> <mdi:information-variant /> </router-link>
          </div>
          <div>
            <router-link to="/login"> <mdi:login /></router-link>
          </div>
          <div>
            <router-link to="/workout"><mdi:weight-lifter /> </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
