import React, {useEffect, useState} from 'react';
import {StyledStatusRow} from "./StatusRow.styled";
import TicketItem from "../TicketItem/TicketItem";
import {getTickets} from "../../../Store/requests";

function StatusRow({rowId, rowName, rowColor}) {
    const [tickets, setTickets] = useState([])
    useEffect(() => {
        getTickets().then(tickets => setTickets(tickets.data))
    }, [])
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
        </StyledStatusRow>
    );
}

export default StatusRow;
