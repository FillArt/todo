import React, {useEffect, useReducer, useState} from 'react';
import {TodoList} from "./TodoList";
import {TodoControl} from "./TodoControl";

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import {Filter, State} from "../../types/Todo";

import {
    addTodo,
    changeStatusTodo,
    changeTodo,
    removeAllTodo,
    removeTodo,
    todoReducer
} from "../../reducers/todoReducer";

const Container = styled(Paper)(({ theme }) => ({
    width: 350,
    padding: theme.spacing(2),
    ...theme.typography.body2,
}));

const initState = (): State[] => {
    const localState = localStorage.getItem('local-state');
    return localState ? JSON.parse(localState) : [];
};

export const Todo = () => {
    const [filter, setFilter] = useState<Filter>('All');
    const [state, dispatchState] = useReducer(todoReducer, [], initState)

    const addNewItem = (title: string) => dispatchState(addTodo(title))
    const removeItem = (id: string) => dispatchState(removeTodo(id))
    const changeItem = (id: string, title: string) => dispatchState(changeTodo(id, title))
    const changeStatusItem = (id: string, isDone: boolean) => dispatchState(changeStatusTodo(id, isDone))
    const removeAllTasks = () => dispatchState(removeAllTodo())

    useEffect(() => {
        localStorage.setItem('local-state', JSON.stringify(state));
    }, [state]);


    let filterState: State[];

    switch (filter) {
        case 'Done':
            filterState = state.filter(el => el.isDone)
            break;
        case 'Active':
            filterState = state.filter(el => !el.isDone)
            break;
        default:
            filterState = state
            break;
    }

    return (
        <Container elevation={12}>
            <TodoControl
                stateStatus={Boolean(state.length > 0)}
                filter={filter}
                setFilter={setFilter}
                addNewItem={addNewItem}
                removeAllTasks={removeAllTasks}
            />
            <TodoList
                state={filterState}
                removeItem={removeItem}
                changeItem={changeItem}
                changeStatusItem={changeStatusItem}
            />
        </Container>
    );
};