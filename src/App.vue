<template>
  <div id="app">
    <div class="container">
    <addTodos />
    <filterTodos/>
    <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import addTodos from "./components/addTodos.vue";
import filterTodos from "./components/FilterTodos.vue";

export default {
  name: "App",
  components: {
    Todos,
    addTodos,
    filterTodos
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background: #e8f7f0;
  line-height: 1.6px;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
