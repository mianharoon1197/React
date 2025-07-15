import { nanoid, createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [{ id: 1, text: "Learn Redux Toolkit" }] //initial state 
}

//todoSlice requires a name and an initial state and a set of reducers

export const todoSlice = createSlice({
    name: "todo",//default name
    initialState,
    //reducers are functions (key functions) that will be used to update the state
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(), //generate a unique id
                text: action.payload
            }
            state.todos.push(newTodo);//push the new todo to the todos array
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);//filter out the todo with the id
        },
           updateTodo: (state, action) => {
            const {id,newText} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);//find the todo with the id
            if (todo) {
                todo.text = newText; //update the text of the todo
            } 
        }

    }
    });

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;//export the actions
export default todoSlice.reducer;//export the reducer to be used in the store