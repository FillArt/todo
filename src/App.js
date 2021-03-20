import React, { useState } from 'react';
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([{
    id: 1,
    task: 'Тестовая задача'
  }]);

  const addTodoList = (name) => {
    setTodos((oldList) => [...oldList, {
      id: Date.now,
      task: name
    }])
  }

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
        <div className="mb-4">
            <h1 className="text-grey-darkest">Cписок задач на React</h1>
            <TodoInput add={addTodoList} />
        </div>
        <div>
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
