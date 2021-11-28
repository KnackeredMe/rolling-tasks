import React from 'react';
import {StyledStatusRow} from "./StatusRow.styled";
import TicketItem from "../TicketItem/TicketItem";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

function StatusRow({rowId, rowName, rowColor, tickets, deleteRow}) {
    return (
        <StyledStatusRow rowColor={rowColor}>
            <h2 className={'rowName'}>{rowName}</h2>
            {tickets && (
                <ul className={'ticketList'}>
                    {tickets.map(ticket =>
                        <TicketItem key={ticket.id} ticket={ticket}/>
                    )}
                </ul>
            )}
            <button className={'deleteButton'} onClick={() => deleteRow(rowId)}><DeleteOutlineIcon/></button>
            <button className={'editButton'} onClick={() => {}}><EditIcon/></button>
        </StyledStatusRow>
    );
}

export default StatusRow;
