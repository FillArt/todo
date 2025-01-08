import React from 'react';

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

import ListItemText from "@mui/material/ListItemText"
import ButtonGroup from "@mui/material/ButtonGroup";
import ListItem from "@mui/material/ListItem";

import {TodoItemProps} from "../../types/Todo";

import {BaseInput} from "../../components/Input/Input";
import {ButtonIcon} from "../../components/Button/Button";

export const TodoItem = (props: TodoItemProps) => {
    const {removeItem, changeItem,  changeStatusItem, item} = props;
    const [changeMode, setMode] = React.useState(false);
    const [changeValue, setChangeValue] = React.useState(item.title);

    const changeItemHandler = (id: string, title: string) => {
        setMode(false);
        changeItem(id, title)
    }

    const changeStatusItemHandler = (id: string, status: boolean) => {
        changeStatusItem(id, status)
        console.log(item)
    }


    return (
            <ListItem>
                {changeMode ?
                    <BaseInput label={''} value={changeValue} setValue={setChangeValue} /> :
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

                <ButtonIcon color="success" onClick={() =>  (changeMode ? changeItemHandler(item.id, changeValue) : changeStatusItemHandler(item.id, !item.isDone) )}><CheckIcon /></ButtonIcon>
            </ButtonGroup>
        </ListItem>
    );
};