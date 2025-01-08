import React from 'react';
import ListItemText from "@mui/material/ListItemText";
import ButtonGroup from "@mui/material/ButtonGroup";
import {ButtonIcon} from "../../components/Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ListItem from "@mui/material/ListItem";
import {TodoItemProps} from "../../types/Todo";
import {BaseInput} from "../../components/Input/Input";

export const TodoItem = (props: TodoItemProps) => {
    const {removeItem, changeItem, item} = props;
    const [changeMode, setMode] = React.useState(false);
    const [changeValue, setChangeValue] = React.useState(item.title);

    const changeItemHandler = (id: string, title: string) => {
        setMode(false);
        changeItem(id, title)
    }

    return (
            <ListItem>
                {changeMode ? <BaseInput label={''} value={changeValue} setValue={setChangeValue} /> : <ListItemText>{item.title}</ListItemText>}

            <ButtonGroup>
                {!changeMode ? (
                    <>
                    <ButtonIcon color="primary" onClick={() => setMode(true)}><EditIcon /></ButtonIcon>
                    <ButtonIcon color="error" onClick={() => removeItem(item.id) }><DeleteIcon /></ButtonIcon>
                    </>
                    ) : null

                }

                <ButtonIcon color="success" onClick={() => changeItemHandler(item.id, changeValue)}><CheckIcon /></ButtonIcon>
            </ButtonGroup>
        </ListItem>
    );
};