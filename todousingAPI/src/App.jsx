import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm';
import TodoItems from './components/TodoItems'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {//also keep previous todos
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo])
  }

  const updateTodo = (id, todo) => {//finds todo by id if found updates with todo else keeps previous todo
    setTodos((prevTodo) =>  prevTodo.map((prevtodo) => { prevtodo.id === id ? todo : prevtodo }) )
  }

  const deleteTodo = (id) => {//filters out the todo with the given id and returns the rest as new array
    setTodos((prevTodo) =>  prevTodo.filter((todo) => todo.id !== id) )
  }

  const toggleComplete = (id) => {//just toggles the completed status of the todo with the given id changes true to false and vice versa
    setTodos((prevTodo) =>  prevTodo.map((todo) =>  todo.id === id ? { ...todo, completed: !todo.completed } : todo ) )
  }

  //setting up for localStorage

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {//as we have aray it converts it to string and stores it in localStorage
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItems todo={todo} />

              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
