import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {TodoList} from "./TodoList";
import {TodoControl} from "./TodoControl";

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';

import {Filter, State} from "../../types/Todo";

import {
    addTodo,
    changeStatusTodo,
    changeTodo,
    removeAllTodo,
    removeTodo,
    todoReducer
} from "../../store/reducers/todoReducer";


const Container = styled(Paper)(({theme}) => ({
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
    const [error, setError] = useState(false);

    const addNewItem =  useCallback((title: string) => {dispatchState(addTodo(title))}, [dispatchState])
    const removeItem =  useCallback((id: string) => {dispatchState(removeTodo(id))}, [dispatchState])
    const changeItem =  useCallback((id: string, title: string) => {dispatchState(changeTodo(id, title))}, [dispatchState])
    const changeStatusItem =  useCallback((id: string, isDone: boolean) => {dispatchState(changeStatusTodo(id, isDone))}, [dispatchState])
    const removeAllTasks =  useCallback(() => {dispatchState(removeAllTodo())}, [dispatchState])

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
            {filterState.length === 0 ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                    <h2>Empty...</h2>
                </Box>
            ) : (
                <TodoList
                    state={filterState}
                    removeItem={removeItem}
                    changeItem={changeItem}
                    changeStatusItem={changeStatusItem}
                    setError={setError}
                    error={error}
                />
            )}
            </Container>
    );
};