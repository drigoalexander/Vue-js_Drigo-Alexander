<template>
  <div id="app">

  <div class="container">
    <img src="./assets/logo.png" alt="" width="10%">
  <h1>Todo List</h1><br>
  <TodoItem/>
  </div>
  
  </div>
</template>

<script>
// import tugas from './'
import TodoItem from './components/TodoItem.vue'
export default {
  name: 'App',
  components: {
    TodoItem,
  }
}
</script>

<style>
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
.container{
  width: 50%;
  margin: auto;
}
</style>
