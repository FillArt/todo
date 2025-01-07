import React from 'react';
import Box from '@mui/material/Box';
import {BaseInput} from "../../components/Input/Input";
import {BaseButton} from "../../components/Button/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import {Filter, TodoControlProps} from "../../types/Todo";

export const TodoControl = (props: TodoControlProps) => {

    const {filter, setFilter} = props;

    const onClickFilter = (filter: Filter) => {
        setFilter(filter);
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                marginBottom: '10px',
            }}>
                <BaseInput label={'Your task...'}/>
                <BaseButton
                    title={'Send'}
                    color={"success"}
                    variant={'contained'}
                    onClick={() => {alert('Send')}} />
            </Box>

            <ButtonGroup sx={{
                display: 'flex',
                justifyContent: 'center',
            }} variant="outlined" aria-label="Basic button group">
                <BaseButton
                    title={'All'}
                    variant={filter === 'All' ? 'contained' : 'outlined'}
                    onClick={() => {onClickFilter('All')}} />

                <BaseButton
                    title={'Active'}
                    variant={filter === 'Active' ? 'contained' : 'outlined'}
                    onClick={() => {onClickFilter('Active')}} />

                <BaseButton
                    title={'Done'}
                    variant={filter === 'Done' ? 'contained' : 'outlined'}
                    onClick={() => {onClickFilter('Done')}} />

                <BaseButton
                    title={'All Delete'}
                    color={'error'}
                    variant={'contained'}
                    onClick={() => {alert('All Delete')}} />
            </ButtonGroup>

        </>

    );
};