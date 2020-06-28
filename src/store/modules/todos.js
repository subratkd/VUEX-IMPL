import axios from 'axios';

const state = {
    todos: [],
    unchangedTodos: [],
};

const getters = {
    allTodos: (state) => state.todos
}
const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log(response.data);
        commit('setTodos', response.data);
    },
    async addTodos({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
            { title, completed: false });
        commit('newTodo', response.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id)
    },
    async filterTodo({ commit }, e) {
        // Get selected number
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText);
        console.log("limit", limit);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data);
    },
    async updateTodo({ commit }, todo) {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
            todo
        );

        console.log(response.data);

        commit('updateTodo', response.data);
    },
    async searchTodo({ commit }, searchValue) {
        commit('searchTodo', searchValue);
    }
};

const mutations = {
    setTodos: (state, todos) => {
        state.todos = todos,
            state.unchangedTodos = state.todos
    },
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    },
    searchTodo: (state, searchValue) => {
        state.todos = state.unchangedTodos.filter(todo => todo.title.includes(searchValue))
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
