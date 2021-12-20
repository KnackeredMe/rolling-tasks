import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {StyledDialog} from "./RegistrationForm.styled";
import closeIcon from '../../../Assets/Images/closeIcon.svg'
import {useState} from "react";
import {registration} from "../../../Store/requests";
import {validationMessages} from "../../../Utils/constants";

export default function RegistrationForm({open, handleClose}){
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')

    const onChangeFirstName= (event) => {
        setFirstName(event.target.value);
        if (event.target.value === '') {
            setFirstNameError(validationMessages.required);
            return
        }
        setFirstNameError('');
    }

    const onChangeLastName = (event) => {
        setLastName(event.target.value);
        if (event.target.value === '') {
            setLastNameError(validationMessages.required);
            return
        }
        setLastNameError('');
    }


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
        setPasswordError('');
    }

    const handleSubmit = (event) =>{
        if (firstName === '') {
            setFirstNameError(validationMessages.required)
        }
        if (lastName === '') {
            setLastNameError(validationMessages.required)
        }
        if (email === '') {
            setEmailError(validationMessages.required)
        }
        if (password === '') {
            setPasswordError(validationMessages.required)
        }
        if (password === '' || email === '' || firstName === '' || lastName === '' || password.length < 8) {
            return
        }
        event.preventDefault();
        const body = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: '',
            password: password,
        }
        registration(body).then(() => {
            console.log('Registration')
            handleClose();
        })

    }
    return(
        <StyledDialog open={open}>
            <DialogContent className={'content'}>
                <div className={'registration-form'}>
                    <h1>Registration</h1>
                    <label className={'first-name'}>First name</label>
                    <TextField value={firstName}
                               className={'first-name-input'}
                               autoFocus
                               margin="dense"
                               id="firstName"
                               type="text"
                               fullWidth
                               variant="standard"
                               onChange={onChangeFirstName}
                               helperText={firstNameError}
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
                               helperText={lastNameError}
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
                <Button className={'registrationConfirm'} onClick={handleSubmit}>Become a roller</Button>
                <Button className={'close'} onClick={() => handleClose()}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Button>
            </DialogActions>
        </StyledDialog>
    )
}