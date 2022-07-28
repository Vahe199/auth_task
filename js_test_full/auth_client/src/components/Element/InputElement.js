import TextField from "@mui/material/TextField";
import * as React from "react";

export const InputElement = ({error,helperText,value ,onChange,label,name, ...props}) => {
    return(
        <TextField
            {...props}
            margin="normal"
            required
            fullWidth
            error={error}
            helperText={helperText}
            value={value}
            onChange={e => onChange(e.target.value)}
            label={label}
            name={name}

        />
    )
}
