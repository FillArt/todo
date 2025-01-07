import React from 'react';
import {TodoList} from "./TodoList";
import {TodoControl} from "./TodoControl";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Container = styled(Paper)(({ theme }) => ({
    width: 420,
    padding: theme.spacing(2),
    ...theme.typography.body2,
}));

export const Todo = () => {
    return (
        <Container elevation={12}>
            <TodoControl />
            <TodoList />
        </Container>
    );
};