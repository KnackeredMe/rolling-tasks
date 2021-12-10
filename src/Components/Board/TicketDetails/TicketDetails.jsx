import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {StyledTicketDetails} from "./TicketDetails.styled";
import closeIcon from '../../../Assets/Images/closeIcon.svg'
import {useEffect, useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import {getTicket, getTickets} from "../../../Store/requests";

export default function TicketDetails({open, ticket}) {
    const [id, setId] = useState('');
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [position, setPosition] = useState('');
    const [complexity, setComplexity] = useState('');
    const history = useHistory();


    useEffect(() => {
        if (!ticket) {
            const historyId = history.location.pathname.split('/').slice(-1)[0];
            getTicket(historyId).then(result => {
                ticket = result.data;
            })
        }
        setId(ticket.id);
        setType(ticket.type);
        setPriority(ticket.priority);
        setTitle(ticket.title);
        setPosition(ticket.position);
        setComplexity(ticket.complexity);
    })

    const onChangeName = (event) => {
    }

    return (
        <StyledTicketDetails open={open}>
            <h1>{title}</h1>
            <DialogContent className={'content'}>
                <div className={'description'}>
                    <label className={'description-label'}>Description</label>
                    <TextField className={'description-input'}
                               autoFocus
                               margin="dense"
                               id="name"
                               type="text"
                               fullWidth
                               placeholder={'Type here...'}
                               variant="standard"
                               onChange={onChangeName}
                    />
                </div>
                <div className={'edit'}>
                    <label className={'edit-label'}>Edit</label>
                </div>
            </DialogContent>
            <DialogActions>
                <Button>Create</Button>
                <Link to={'/board'} className={'close'}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Link>
            </DialogActions>
        </StyledTicketDetails>
    );
}
