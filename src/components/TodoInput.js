import React from 'react';

export function TodoInput() {
  return (
    <div className="flex mt-4">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-500" placeholder="Добавить задачу" />
      <button className="flex-no-shrink p-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500">Добавить</button>
    </div>
  )
}