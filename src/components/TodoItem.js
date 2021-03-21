import React, { useState } from 'react'

export function TodoItem(props) {
  const [done, setDone] = useState(true)
  const { todo, set } = props

  const doneButton = () => {
    setDone(!done)
  }

  const editTodoList = id => {
    console.log('Начал редактировать id:', id)
  }

  const deleteItemTodoList = id => {
    console.log('Удалил задачу с id:', id)
    set(oldTodo => oldTodo.filter(item => item.id !== id))
  }

  const classDone = 'text-green-500 border-green-500 hover:bg-green-500'
  const classNoDone = 'text-gray-500 border-gray-500 hover:bg-gray-500'

  return (
    <div className="flex mb-4 items-center">
      <p className={`w-full text-grey-darkest ${done ? null : 'line-through'}`}>
        {todo.task}
      </p>
      <button
        onClick={() => editTodoList(todo.id)}
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-yellow-500 border-yellow-500 hover:text-white hover:bg-yellow-500"
      >
        Редактировать
      </button>
      <button
        onClick={doneButton}
        className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white ${
          done ? classDone : classNoDone
        }`}
      >
        {done ? 'Готово' : 'Не готово'}{' '}
      </button>
      <button
        onClick={() => deleteItemTodoList(todo.id)}
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
      >
        Удалить
      </button>
    </div>
  )
}
