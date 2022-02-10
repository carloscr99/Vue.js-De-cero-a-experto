import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    todos: [
      {id: '1', text: 'uno', completed: false},
      {id: '2', text: 'dos', completed: true},
      {id: '3', text: 'tres', completed: false},
      {id: '4', text: 'cuatro', completed: true},
      {id: '5', text: 'cinco', completed: false},
    ]
  },
  mutations: {
    toggleTodo(state, id){
      const todoIdx = state.todos.findIndex(todo => todo.id === id)

      state.todos[todoIdx].completed = !state.todos[todoIdx].completed 
    },
    createTodo(state, text = ''){

      if(text.length <= 1 ) return

      state.todos.push({
        id: uuidv4(),
        completed: false,
        text
      })


    }
  },
  actions: {
  },
  getters:{
    pendingTodos(state, getters, rootState){
      return state.todos.filter(todo => !todo.completed)
    }, 
    allTodos(state, getters, rootState){
      return state.todos
    },
    completedTodos(state, getters, rootState){
      return state.todos.filter(todo => todo.completed)
    },
    getTodosByTab: (state, getters, rootState) => (tab) => {

      switch (tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos      
          
      
        default:
          break;
      }

    }
  },
  modules: {
  }
})
