import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {StyledTicketDetails} from "./TicketDetails.styled";
import closeIcon from '../../../Assets/Images/closeIcon.svg'
import {useEffect, useState} from "react";

export default function TicketDetails({open, handleClose}) {
    const [rowName, setRowName] = useState('');
    const [rowColor, setRowColor] = useState('');

    useEffect(() => console.log(open), [open])

    const onChangeName = (event) => {
        setRowName(event.target.value);
    }

    const onChangeColor = (event) => {
        setRowColor(event.target.value)
    }

    return (
        <StyledTicketDetails open={open}>
            <DialogContent className={'content'}>
                <div className={'row-name'}>
                    <label className={'row-name-label'}>Name</label>
                    <TextField className={'row-name-input'}
                               autoFocus
                               margin="dense"
                               id="name"
                               type="text"
                               fullWidth
                               variant="standard"
                               onChange={onChangeName}
                    />
                </div>
                <div className={'row-color'}>
                    <label className={'row-color-label'}>Color</label>
                    <TextField className={'row-color-input'}
                               autoFocus
                               margin="dense"
                               id="color"
                               type="color"
                               variant="standard"
                               defaultValue="#000000"
                               onChange={onChangeColor}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {handleClose()}}>Create</Button>
                <Button className={'close'} onClick={() => handleClose()}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Button>
            </DialogActions>
        </StyledTicketDetails>
    );
}
