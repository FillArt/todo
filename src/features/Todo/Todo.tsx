import React from 'react';
import {TodoList} from "./TodoList";
import {TodoControl} from "./TodoControl";

export const Todo = () => {
    return (
        <div>
            <TodoControl />
            <TodoList />
        </div>
    );
};