import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Copyright} from "../Utils/Copyright";
import {useState} from "react";
import validate from "../Utils/Validation";
import Box from "@mui/material/Box";
import {InputElement} from "../Element/InputElement";
import {useDispatch} from "react-redux";
import {Registration} from "../../store/actions/AuthActions";


export const SignUp = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const errors = validate(name, email, pass);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let {pass,email,name} = errors
        // eslint-disable-next-line no-console
        if(pass || email || name) return
        dispatch(Registration({
            name:data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
        }))
    };

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate  sx={{ mt: 1 }}>
                     <InputElement
                            error={errors.name.length > 0}
                            helperText={errors.name}
                            value={name}
                            onChange={val => setName(val)}
                            label="User Name"
                            name="name"
                            autoFocus
                        />
                        <InputElement
                            error={errors.email.length > 0}
                            helperText={errors.email}
                            value={email}
                            onChange={val => setEmail(val)}
                            label="Email Address"
                            name="email"
                                   />
                        <InputElement
                            error={errors.pass.length > 0}
                            helperText={errors.pass}
                            value={pass}
                            onChange={val => setPass(val)}
                            name="password"
                            label="Password"
                            type="password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
    );
}
