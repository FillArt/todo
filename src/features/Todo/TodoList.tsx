import React from 'react';
import List from '@mui/material/List';
import {TodoItem} from "./TodoItem";

export const TodoList = () => {
    return (
        <List>

            <TodoItem/>
            <TodoItem/>
            <TodoItem/>

        </List>

    );
};