import React from 'react';
import List from '@mui/material/List';
import {TodoItem} from "./TodoItem";
import {TodoListProps} from "../../types/Todo";



export const TodoList: React.FC<TodoListProps> = ({state, changeStatusItem, changeItem, removeItem}) => {
    return (
        <List>
            {state && state.map(item => {
                return <TodoItem
                        item={item}
                        changeStatusItem={changeStatusItem}
                        changeItem={changeItem}
                        removeItem={removeItem}/>
            })}
        </List>

    );
};