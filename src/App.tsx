import React from 'react';

import {Home} from "./pages/Home";
import {Todo} from "./features/Todo/Todo";

import './App.css';

function App() {
  return (
      <Home>
          <Todo/>
      </Home>
  );
}

export default App;
