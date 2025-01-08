import React, {useReducer, useState} from 'react';
import {TodoList} from "./TodoList";
import {TodoControl} from "./TodoControl";

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import {Filter} from "../../types/Todo";
import {todoReducer} from "../../reducers/todoReducer";

const Container = styled(Paper)(({ theme }) => ({
    width: 350,
    padding: theme.spacing(2),
    ...theme.typography.body2,
}));

export const Todo = () => {
    const [filter, setFilter] = useState<Filter>('All');
    const [state, dispathState] = useReducer(todoReducer, [])


    return (
        <Container elevation={12}>
            <TodoControl filter={filter} setFilter={setFilter} />
            <TodoList />
        </Container>
    );
};