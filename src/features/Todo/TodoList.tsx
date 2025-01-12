import React from 'react';
import List from '@mui/material/List';
import {TodoItem} from "./TodoItem";
import {TodoListProps} from "../../types/Todo";



export const TodoList = (props: TodoListProps) => {
    const {state} = props;
    return (
        <List>
            {state && state.map(item => {
                return <TodoItem
                        key={item.id}
                        item={item}
                        changeStatusItem={props.changeStatusItem}
                        changeItem={props.changeItem}
                        removeItem={props.removeItem}/>
            })}
        </List>

    );
};