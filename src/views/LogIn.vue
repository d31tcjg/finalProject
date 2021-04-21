<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="bg-blue-500 rounded p-20 shadow-2xl text-white">
      <h1 class="text-center text-3xl font-bold tracking-wider underline mb-5">
        Login
      </h1>
      <div>
        <form>
          <label for="username">Username:</label><br />
          <input
            type="text"
            id="username"
            name="username"
            class="bg-white text-black rounded-sm"
          /><br />
          <label for="pwd">Password:</label><br />
          <input
            type="password"
            id="pwd"
            name="pwd"
            class="bg-white text-black rounded-sm"
          /><br />
          <input
            type="submit"
            value="Submit"
            class="text-black tracking-wider font-bold hover:bg-gray-500 hover:text-white mt-5 w-full p-2 rounded"
          />
        </form>
      </div>
    </div>
  </div>
</template>
