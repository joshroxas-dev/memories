import React from 'react'

import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({ handleChange, handleShowPassword, half, name, label, autoFocus, type }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField type={type} name={name} label={label} variant="outlined" onChange={handleChange} autoFocus={autoFocus} xs={6} required fullWidth inputProps={name === "password" && {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type === "password" ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            }} />
        </Grid>
    )
}

export default Input
