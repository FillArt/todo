import React from 'react';
import Button from '@mui/material/Button';

type BaseButtonProps = {
    title: string;
    onClick: () => void;
    variant: 'outlined' | 'contained' | 'text';
    disabled?: boolean;
    color?: 'secondary' | 'success' | 'error';
}

export const BaseButton = (props: BaseButtonProps) => {
    const { title, onClick, variant, color, disabled = false} = props;
    const onClickHandler = () => onClick();

    return <Button disabled={disabled} onClick={onClickHandler} color={color} variant={variant}>{title}</Button>;
};