import React from 'react';
import Box from '@mui/material/Box';
import {BaseInput} from "../../components/Input/Input";
import {BaseButton} from "../../components/Button/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

export const TodoControl = () => {
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
                    variant={'outlined'}
                    onClick={() => {alert('All')}} />

                <BaseButton
                    title={'Active'}
                    variant={'outlined'}
                    onClick={() => {alert('Active')}} />

                <BaseButton
                    title={'Done'}
                    variant={'outlined'}
                    onClick={() => {alert('Done')}} />

                <BaseButton
                    title={'All Delete'}
                    color={'error'}
                    variant={'contained'}
                    onClick={() => {alert('All Delete')}} />
            </ButtonGroup>

        </>

    );
};