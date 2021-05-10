<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="bg-blue-500 rounded p-20 shadow-2xl">
      <div class="text-3xl text-white font-bold text-center tracking-wide">
        <h1>Welcome to WorkoutLog!</h1>
      </div>
      <div class="text-white text-center text-xl">
        <p>Log your workouts here</p>
      </div>
      <div class="text-white text-center mt-4">
        <p class="order-first inline-block align-middle">
          SignUp to get started
        </p>
        <button
          @click="$router.push('signup')"
          class="w-full bg-white text-blue-800 p-2 rounded mt-2 hover:bg-gray-500 font-bold tracking-wide mb-5"
        >
          SignUp
        </button>
        <p>Or login to continue</p>

        <button
          @click="$router.push('login')"
          class="w-full bg-white text-blue-800 p-2 rounded mt-1 hover:bg-gray-500 font-bold tracking-wide"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>
