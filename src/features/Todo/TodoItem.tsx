import React, {useCallback, useState} from 'react';

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from '@mui/icons-material/Clear';

import ListItemText from "@mui/material/ListItemText"
import ButtonGroup from "@mui/material/ButtonGroup";
import ListItem from "@mui/material/ListItem";

import {TodoItemProps} from "../../types/Todo";

import {BaseInput} from "../../components/Input/Input";
import {ButtonIcon} from "../../components/Button/Button";

export const TodoItem = React.memo((props: TodoItemProps) => {
    const {removeItem, changeItem,  changeStatusItem, setError, error, item, tabIndex} = props;

    const [changeMode, setMode] = useState(false);
    const [changeValue, setChangeValue] = useState(item.title);

    const changeItemHandler = useCallback((id: string, title: string) => {
        if(!title) {
            setError(true)
            return;
        }

        setMode(false);
        setError(false);
        changeItem(id, title)
    }, [changeItem, setMode, setError]);

    const changeStatusItemHandler = useCallback((id: string, status: boolean) => {
        changeStatusItem(id, status)
    }, [changeStatusItem])

    const changeItemKeyupHandler = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if(e.key === "Enter") { changeItemHandler(item.id, target.value) }
    }, [changeItemHandler, item.id])

    const onFocusHandler = useCallback((e: any ) => {
        if(e.key === "Enter" && !changeMode) {changeStatusItemHandler(item.id, !item.isDone)}
        if (e.key === "Delete") { removeItem(item.id) }
        if (e.key === " ") { setMode(true) }
    }, [changeStatusItemHandler, changeMode, removeItem, setMode, item.id, item.isDone])


    return (
            <ListItem sx={{
                '&:focus': {
                    outline: '2px solid green',
                    borderRadius: '5px',
                    outlineOffset: '2px',
                },
            }} tabIndex={tabIndex} onKeyDown={onFocusHandler}>

                {changeMode ?
                    <BaseInput label={''} error={error} value={changeValue} setValue={setChangeValue} onKeyUpHandler={changeItemKeyupHandler} /> :
                    <ListItemText style={ item.isDone && !changeMode
                        ? { textDecoration: "line-through" }
                        : undefined }>
                        {item.title}
                    </ListItemText>}

            <ButtonGroup>
                {!changeMode ? (
                    <>
                    <ButtonIcon color="primary" onClick={() => setMode(true)}><EditIcon /></ButtonIcon>
                    <ButtonIcon color="error" onClick={() => removeItem(item.id) }><DeleteIcon /></ButtonIcon>
                    </>
                    ) : null

                }

                <ButtonIcon color={item.isDone ? 'error' : 'success'}
                            onClick={() =>  (changeMode ? changeItemHandler(item.id, changeValue) : changeStatusItemHandler(item.id, !item.isDone) )}>

                    {item.isDone ? <ClearIcon /> : <CheckIcon /> }

                </ButtonIcon>
            </ButtonGroup>
        </ListItem>
    );
});