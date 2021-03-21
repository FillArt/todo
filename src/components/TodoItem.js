import React, { useRef, useState, useEffect } from 'react'

export function TodoItem(props) {
  const [done, setDone] = useState(true)
  const [editMod, setEditMod] = useState(false)

  const { todo, set } = props
  const editInput = useRef(null)

  const classDone = 'text-green-500 border-green-500 hover:bg-green-500'
  const classNoDone = 'text-gray-500 border-gray-500 hover:bg-gray-500'

  useEffect(() => {
    if (editMod) {
      editInput.current.focus()
    }
  }, [editMod])

  const doneButton = () => {
    setDone(!done)
  }

  const editTodoList = id => {
    setEditMod(!editMod)
    editInput.current.value = todo.task
    console.log('Начал редактировать id:', id)
  }

  const saveTodoList = id => {
    console.log('Сохранил отредактированную запись с id:', id)
    setEditMod(!editMod)
  }

  const deleteItemTodoList = id => {
    console.log('Удалил задачу с id:', id)
    console.log('У неё было имя:', todo.task)
    set(oldTodo => oldTodo.filter(item => item.id !== id))
  }

  return (
    <div className="flex mb-4 items-center">
      <input
        className={`w-full ${editMod ? null : 'hidden'}`}
        ref={editInput}
        type="text"
      />

      <p
        className={`w-full text-grey-darkest ${done ? null : 'line-through'} ${
          editMod ? 'hidden' : null
        }`}
      >
        {todo.task}
      </p>

      <button
        onClick={() =>
          editMod ? saveTodoList(todo.id) : editTodoList(todo.id)
        }
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-yellow-500 border-yellow-500 hover:text-white hover:bg-yellow-500"
      >
        {editMod ? 'Сохранить' : 'Редактировать'}
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
