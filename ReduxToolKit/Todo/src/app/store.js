import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice' // import the todo reducer



const getFromLocalStorage = () => {
  const data = localStorage.getItem('todos');
  if (data === null) return undefined;
  return {
    todos: {
      todos: JSON.parse(data)
    }
  };
};


const saveToLocalStorage = (state) => {
    localStorage.setItem('todos', JSON.stringify(state.todos.todos));
}

const preloadedState = getFromLocalStorage();


export const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    preloadedState

});//it need an object with reducer property

store.subscribe(() => saveToLocalStorage(store.getState())); 