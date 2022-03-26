<template>
  <div
    class="w-screen h-screen mx-auto flex flex-col justify-center gap-10 items-center bg-[#121A27]"
  >
    <h1
      class="font-extrabold text-7xl pb-20 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-700"
    >
      Welcome to Todo List
    </h1>

    <router-link
      to="TodoView"
      class="text-2xl text-white font-bold border-[#121A27] hover:border-pink-400 border-b-2 hover:pb-0 tracking-widest uppercase transition duration-300 ease-in-out"
    >
      Start listing
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
