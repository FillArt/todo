import React, { useState } from 'react'
import { TodoInput } from './components/TodoInput'
import { TodoItem } from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'Тестовая задача',
    },
  ])

  console.log(todos)

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Cписок задач на React</h1>
          <TodoInput add={setTodos} />
        </div>
        <div>
          {todos.map(item => (
            <TodoItem key={item.id} todo={item} set={setTodos} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
