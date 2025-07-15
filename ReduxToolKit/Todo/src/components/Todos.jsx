import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'
import { useState } from 'react'

function Todos() {
  const todos = useSelector(state => state.todos.todos)
  
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  return (
    <>
      <div className='text-2xl font-semibold mt-1.5 bg-green-200'>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {editId === todo.id ? (//for editing a todo
              <input
                autoFocus
                className="flex-1 mr-2 px-2 py-1 rounded text-white"
                value={editText ?? ''}//if editText is null, set it to empty string
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <div className="text-white flex-1 text-left">{todo.text}</div>
            )}

            {editId === todo.id ? (
              <button
                onClick={() => {
                  dispatch(updateTodo({ id: todo.id, newText: editText }))
                  setEditId(null)
                  setEditText('')
                }}
                className="text-white bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-md"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditId(todo.id)
                  setEditText(todo.text)
                }}
                className="text-white bg-yellow-500 border-0 py-1 px-4 mr-1 focus:outline-none hover:bg-yellow-600 rounded text-md"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
