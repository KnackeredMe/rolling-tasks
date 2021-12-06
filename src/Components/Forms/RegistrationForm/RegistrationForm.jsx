import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {StyledDialog} from "./RegistrationForm.styled";
import closeIcon from '../../../Assets/Images/closeIcon.svg'
import {useState} from "react";

export default function RegistrationForm({open, handleClose}){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeFirstName= (event) => {
        setFirstName(event.target.value);
    }

    const onChangeLastName = (event) => {
        setLastName(event.target.value);
    }

    const onChangeDate = (event) => {
      setDate(event.target.value);
    }

    const onChangeEmail= (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
      setPassword(event.target.value)
    }
    return(
        <StyledDialog open={open}>
            <DialogContent className={'content'}>
                <div className={'registration-form'}>
                    <h1>Registration form</h1>
                    <label className={'first-name'}>First name</label>
                    <TextField className={'first-name-input'}
                               autoFocus
                               margin="dense"
                               id="firstName"
                               type="text"
                               fullWidth
                               variant="standard"
                               onChange={onChangeFirstName}
                    />
                    <label className={'last-name'}>Last name</label>
                    <TextField className={'last-name-input'}
                               autoFocus
                               margin="dense"
                               id="lastName"
                               type="text"
                               fullWidth
                               variant="standard"
                               onChange={onChangeLastName}
                    />
                    <label className={'date'}>Date of birth</label>
                    <TextField
                        autoFocus
                        margin="dense"
                        className={'date-input'}
                        type="date"
                        fullWidth
                        variant="standard"
                        onChange={onChangeDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
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
                    <label className={'retype-password'}>Retype password</label>
                    <TextField className={'retype-password-input'}
                               autoFocus
                               margin="dense"
                               id="retype-password"
                               type="password"
                               fullWidth
                               variant="standard"
                               onChange={onChangePassword}
                               minLength={8}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button className={'registrationConfirm'} onClick={() => {}}>Become a roller</Button>
                <Button className={'close'} onClick={() => handleClose()}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Button>
            </DialogActions>
        </StyledDialog>
    )
}