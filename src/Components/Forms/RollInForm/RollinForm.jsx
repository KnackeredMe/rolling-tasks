import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {StyledDialog} from "./RollinForm.styled";
import closeIcon from '../../../Assets/Images/closeIcon.svg'
import {useState} from "react";

export default function RollinForm({open, handleClose}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail= (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();

    }
    return(
        <StyledDialog open={open} onSubmit={handleSubmit}>
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
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button className={'registrationConfirm'} onClick={() => {}}>Roll in</Button>
                <Button className={'close'} onClick={() => handleClose()}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Button>
            </DialogActions>
        </StyledDialog>
    )
}