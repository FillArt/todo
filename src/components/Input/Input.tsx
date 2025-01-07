import React, {ChangeEvent, useState} from 'react';
import TextField from "@mui/material/TextField";

type BaseInputProps = {
    label: string;
}

export const BaseInput = (props: BaseInputProps) => {
    const { label } = props;
    const [value, setValue] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return <TextField id="outlined-basic" value={value} label={label} onChange={onChangeHandler} size="small" variant="outlined" />
};