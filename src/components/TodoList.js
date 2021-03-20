import React from 'react';
import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  return (
    <>
    {props.todos.map(item => <TodoItem key={item.id} todo={item} />)}
    </>
  )
}