import React, { useState } from 'react';

export function TodoItem(props) {

  const [done, setDone] = useState(true);

  const doneButton = () => {
    setDone(!done);
  }

  const classDone = 'text-green-500 border-green-500 hover:bg-green-500'
  const classNoDone = 'text-gray-500 border-gray-500 hover:bg-gray-500'

  return (
    <div className="flex mb-4 items-center">
      <p className={`w-full text-grey-darkest ${done ? null : 'line-through'}`}>{props.todo.task}</p>
      <button onClick={doneButton} className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white ${done ? classDone : classNoDone}`}>{ done ? 'Готово' : 'Не готово' } </button>
      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Удалить</button>
    </div>
  )
}