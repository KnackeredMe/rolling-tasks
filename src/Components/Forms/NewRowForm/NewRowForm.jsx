import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {StyledNewRowForm} from "./NewRowForm.styled";
import closeIcon from '../../../Assets/Images/closeIcon.svg'
import {useState} from "react";
import {validationMessages} from "../../../Utils/constants";

export default function NewRowForm({open, handleClose, createRow}) {
    const [rowName, setRowName] = useState('');
    const [rowNameError, setRowNameError] = useState('');
    const [rowColor, setRowColor] = useState('');
    const [rowColorError, setRowColorError] = useState('');

    const onChangeName = (event) => {
        setRowName(event.target.value);
        if (event.target.value === '') {
            setRowNameError(validationMessages.required);
            return;
        }
        setRowNameError('');
    }

    const onChangeColor = (event) => {
        setRowColor(event.target.value)
        if (event.target.value === '') {
            setRowColorError('Required');
            return;
        }
        setRowColorError('');
    }

    const handleSubmit = () => {
        if (rowName === '') {
            setRowNameError(validationMessages.required);
        }
        if (rowColor === '') {
            setRowColorError('Required');
        }
        if (rowName === '' || rowColor === '') {
            return
        }
        createRow(rowName, rowColor);
        handleClose();
    }

    return (
        <StyledNewRowForm open={open}>
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
                               helperText={rowNameError}
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
                               helperText={rowColorError}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit}>Create</Button>
                <Button className={'close'} onClick={() => handleClose()}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Button>
            </DialogActions>
        </StyledNewRowForm>
    );
}
