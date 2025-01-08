import React from 'react';
import ListItemText from "@mui/material/ListItemText";
import ButtonGroup from "@mui/material/ButtonGroup";
import {ButtonIcon} from "../../components/Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ListItem from "@mui/material/ListItem";

export const TodoItem = () => {
    return (
        <ListItem>
            <ListItemText>Test</ListItemText>
            <ButtonGroup>
                <ButtonIcon color="primary" onClick={() => alert('Edit')}><EditIcon /></ButtonIcon>
                <ButtonIcon color="error" onClick={() => alert('Delete')}><DeleteIcon /></ButtonIcon>
                <ButtonIcon color="success" onClick={() => alert('Did it')}><CheckIcon /></ButtonIcon>
            </ButtonGroup>
        </ListItem>
    );
};