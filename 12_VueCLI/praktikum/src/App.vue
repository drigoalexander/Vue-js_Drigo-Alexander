<template>
  <div
    id="app"
    class="bg-[#121A27] w-screen h-full flex justify-center items-center"
  >
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style lang="scss">
@import "./index.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 50vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.container {
  width: 50%;
  margin: auto;
}
</style>
