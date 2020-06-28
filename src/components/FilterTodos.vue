<template>
     <div>
     <div>
         Filter Todos:
        <select @change="filterTodo($event)">
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
        </select>
     </div>
     <div align="right">
         <input type="text" v-model="searchValue" placeholder="Search Todo..." @change="onChange()">
    </div>    
     
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "filterTodos",
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    ...mapActions(["filterTodo", "searchTodo"]),
    onChange() {
      this.searchTodo(this.searchValue);
    }
  }
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
