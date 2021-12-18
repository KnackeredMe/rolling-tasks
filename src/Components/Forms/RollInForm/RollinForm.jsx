import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {StyledDialog} from "./RollinForm.styled";
import closeIcon from '../../../Assets/Images/closeIcon.svg'
import {useState} from "react";
import {authorization} from "../../../Store/requests";
import {useHistory} from "react-router-dom";
import {validationMessages} from "../../../Utils/constants";

export default function RollinForm({open, handleClose}){
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const history = useHistory();

    const onChangeEmail= (event) => {
        setEmail(event.target.value);
        if (event.target.value === '') {
            setEmailError(validationMessages.required);
            return
        }
        setEmailError('');
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
        if (event.target.value === '') {
            setPasswordError(validationMessages.required);
            return
        }
        if (event.target.value.length < 8) {
            setPasswordError(validationMessages.passwordLength)
            return;
        }
        setPasswordError('');
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        if (email === '') {
            setEmailError(validationMessages.required)
        }
        if (password === '') {
            setPasswordError(validationMessages.required)
        }
        if (password === '' || email === '' || password.length < 8) {
            return
        }
        const body = {
            email: email,
            password: password,
        }

        authorization(body).then(result => {
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('isAuthenticated', 'true');
            handleClose();
            history.push('/board');
        })
    }
    return(
        <StyledDialog open={open}>
            <DialogContent className={'content'}>
                <div className={'rollin-form'}>
                    <label className={'email'}>Email</label>
                    <TextField className={'email-input'}
                               autoFocus
                               margin="dense"
                               id="email"
                               type="email"
                               fullWidth
                               variant="standard"
                               onChange={onChangeEmail}
                               helperText={emailError}
                    />
                    <label className={'password'}>Password</label>
                    <TextField className={'password-input'}
                               autoFocus
                               margin="dense"
                               id="password"
                               type="password"
                               fullWidth
                               variant="standard"
                               onChange={onChangePassword}
                               minLength={8}
                               helperText={passwordError}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button className={'registrationConfirm'} onClick={handleSubmit}>Roll in</Button>
                <Button className={'close'} onClick={() => handleClose()}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Button>
            </DialogActions>
        </StyledDialog>
    )
}
