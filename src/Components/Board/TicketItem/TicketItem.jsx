import React, {useEffect, useState} from 'react';
import {StyledTicketItem} from "./TicketItem.styled";
import {StyledInfoBar} from "./InfoBar/InfoBar.styled";
import userIcon from "../../../Assets/Images/userIcon.png"
import TicketDetails from "../TicketDetails/TicketDetails";
import {Link, Route} from 'react-router-dom';

function TicketItem(ticket) {
    return (
        <StyledTicketItem>
            <Link to={`/board/${ticket.ticket.id}`}>
                <h3 className={'ticketName'}>{ticket.ticket.title}</h3>
                <ul className={'ticketInfo'}>
                    <li className={'ticketInfoItem'}>
                        <StyledInfoBar/>
                        <p>Type</p>
                    </li>
                    <li className={'ticketInfoItem'}>
                        <StyledInfoBar/>
                        <p>Priority</p>
                    </li>
                    <li className={'ticketInfoItem'}>
                        <StyledInfoBar/>
                        <p>Complexity</p>
                    </li>
                    <li className={'ticketInfoItem'}>
                        <img className={'userPhoto'} src={userIcon} alt={'user'}/>
                        <p>Assignee</p>
                    </li>
                </ul>
            </Link>
            <Route exact path={`/board/${ticket.ticket.id}`}>
                <TicketDetails open={true}/>
            </Route>
        </StyledTicketItem>
    );
}

export default TicketItem;
