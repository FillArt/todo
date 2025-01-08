import React, {ChangeEvent} from 'react';
import TextField from "@mui/material/TextField";

type BaseInputProps = {
    label: string;
    value: string;
    setValue: (value: string) => void;
}

export const BaseInput = (props: BaseInputProps) => {
    const { label, value, setValue } = props;


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return <TextField style={{ width: '100%' }} id="outlined-basic" value={value} label={label} onChange={onChangeHandler} size="small" variant="outlined" />
};