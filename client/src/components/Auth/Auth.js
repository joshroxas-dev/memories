import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'

import Input from "./Input";

import useStyles from "./styles";

import LockedOutlinedIcon from "@material-ui/icons/LockOutlined";

const Auth = () => {

    const classes = useStyles();

    const isSignUp = true;

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    } 

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockedOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {
                            isSignUp && (
                                <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            )
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Submit</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
