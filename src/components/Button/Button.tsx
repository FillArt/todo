import React from 'react';
import Button from '@mui/material/Button';

type BaseButtonProps = {
    title: string;
    onClick: () => void;
    disabled?: boolean;
}

export const BaseButton = (props: BaseButtonProps) => {
    const { title, onClick, disabled = false} = props;
    const onClickHandler = () => onClick();

    return <Button disabled={disabled} onClick={onClickHandler} variant="contained">{title}</Button>;
};