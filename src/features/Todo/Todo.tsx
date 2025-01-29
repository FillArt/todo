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
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";


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
    // const [state, dispatchState] = useReducer(todoReducer, [], initState)

    const stateTodo = useSelector<RootState, State[]>(state => state.todo )
    const dispatch = useDispatch();

    const [filter, setFilter] = useState<Filter>('All');
    const [error, setError] = useState(false);

    const addNewItem =  useCallback((title: string) => {dispatch(addTodo(title))}, [dispatch])
    const removeItem =  useCallback((id: string) => {dispatch(removeTodo(id))}, [dispatch])
    const changeItem =  useCallback((id: string, title: string) => {dispatch(changeTodo(id, title))}, [dispatch])
    const changeStatusItem =  useCallback((id: string, isDone: boolean) => {dispatch(changeStatusTodo(id, isDone))}, [dispatch])
    const removeAllTasks =  useCallback(() => {dispatch(removeAllTodo())}, [dispatch])

    // useEffect(() => {
    //     localStorage.setItem('local-state', JSON.stringify(state));
    // }, [state]);


    let filterState: State[];

    switch (filter) {
        case 'Done':
            filterState = stateTodo.filter(el => el.isDone)
            break;
        case 'Active':
            filterState = stateTodo.filter(el => !el.isDone)
            break;
        default:
            filterState = stateTodo
            break;
    }

    return (
        <Container elevation={12}>
            <TodoControl
                stateStatus={Boolean(stateTodo.length > 0)}
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