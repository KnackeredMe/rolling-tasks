import React from 'react';
import {StyledStatusRow} from "./StatusRow.styled";
import TicketItem from "../TicketItem/TicketItem";

function StatusRow({rowName, rowColor}) {
    return (
        <StyledStatusRow rowColor={rowColor}>
            <h2 className={'rowName'}>{rowName}</h2>
            <ul className={'ticketList'}>
                <TicketItem/>
                <TicketItem/>
                <TicketItem/>
                <TicketItem/>
            </ul>
        </StyledStatusRow>
    );
}

export default StatusRow;
