import React from 'react';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";

type BaseButtonProps = {
    title: string;
    onClick: () => void;
    variant: 'outlined' | 'contained' | 'text';
    disabled?: boolean;
    color?: 'secondary' | 'success' | 'error';
}

type IconButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    color: "inherit" | "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined
}

export const ButtonBase = (props: BaseButtonProps) => {
    const { title, onClick, variant, color, disabled = false} = props;
    const onClickHandler = () => onClick();

    return <Button disabled={disabled} onClick={onClickHandler} color={color} variant={variant}>{title}</Button>;
};

export const ButtonIcon = (props: IconButtonProps) => {
    const {children, color, onClick} = props;
    const onClickHandler = () => onClick();

    return <IconButton onClick={onClickHandler} color={color}>{children}</IconButton>

}