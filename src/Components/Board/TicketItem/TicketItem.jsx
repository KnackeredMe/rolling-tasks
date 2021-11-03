import React from 'react';
import {StyledTicketItem} from "./TicketItem.styled";
import {StyledInfoBar} from "./InfoBar/InfoBar.styled";
import userIcon from "../../../Assets/Images/userIcon.png"

function TicketItem(props) {
    return (
        <StyledTicketItem>
            <h3 className={'ticketName'}>Investigate how to create events in Google callendar</h3>
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

        </StyledTicketItem>
    );
}

export default TicketItem;
