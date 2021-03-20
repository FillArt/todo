import React from 'react';
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
        <div className="mb-4">
            <h1 className="text-grey-darkest">Cписок задач на React</h1>
            <TodoInput />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
