import React from 'react';
import List from '@mui/material/List';
import {TodoItem} from "./TodoItem";
import {TodoListProps} from "../../types/Todo";

export const TodoList = (props: TodoListProps) => {
    const {state} = props;
    return (
        <List>
            {state && state.map((item, index) => (
                <TodoItem
                    key={item.id}
                    item={item}
                    tabIndex={index + 5}
                    changeStatusItem={props.changeStatusItem}
                    changeItem={props.changeItem}
                    removeItem={props.removeItem}
                    setError={props.setError}
                    error={props.error}
                />
            ))}
        </List>

    );
};