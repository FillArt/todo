import React, {ChangeEvent} from 'react';
import TextField from "@mui/material/TextField";

type BaseInputProps = {
    label: string;
    value: string;
    setValue: (value: string) => void;
    error?: boolean;
    onKeyUpHandler?: (e: any) => void;
}

export const BaseInput = (props: BaseInputProps) => {
    const { label, value, setValue, onKeyUpHandler, error = false } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return <TextField
        style={{ width: '100%' }}
        id="outlined-basic" value={value}
        label={label}
        error={error}
        onChange={onChangeHandler}
        onKeyUp={(e) => onKeyUpHandler ? onKeyUpHandler(e) : null}
        size="small"
        variant="outlined" />
};