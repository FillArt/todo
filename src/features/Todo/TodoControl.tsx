import React, {useState} from 'react';
import Box from '@mui/material/Box';
import {BaseInput} from "../../components/Input/Input";
import {ButtonBase} from "../../components/Button/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import {Filter, TodoControlProps} from "../../types/Todo";

export const TodoControl: React.FC<TodoControlProps> = ({filter, setFilter, addNewItem, removeAllTasks}) => {

    const [value, setValue] = useState("");

    const onClickFilter = (filter: Filter) => setFilter(filter);
    const onClickHandler = () => {
        setValue("");
        addNewItem(value)
    }
    const onKeyUpHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") onClickHandler()
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                marginBottom: '10px',
            }}>
                <BaseInput label={'Your task...'} value={value} setValue={setValue} onKeyUpHandler={onKeyUpHandler}  />
                <ButtonBase
                    title={'Create'}
                    color={"success"}
                    variant={'contained'}
                    onClick={onClickHandler} />
            </Box>

            <ButtonGroup sx={{
                display: 'flex',
                justifyContent: 'center',
            }} variant="outlined" aria-label="Basic button group">
                <ButtonBase
                    title={'All'}
                    variant={filter === 'All' ? 'contained' : 'outlined'}
                    onClick={() => {onClickFilter('All')}} />

                <ButtonBase
                    title={'Active'}
                    variant={filter === 'Active' ? 'contained' : 'outlined'}
                    onClick={() => {onClickFilter('Active')}} />

                <ButtonBase
                    title={'Done'}
                    variant={filter === 'Done' ? 'contained' : 'outlined'}
                    onClick={() => {onClickFilter('Done')}} />

                <ButtonBase
                    title={'All Delete'}
                    color={'error'}
                    variant={'contained'}
                    onClick={() => removeAllTasks()} />
            </ButtonGroup>

        </>

    );
};