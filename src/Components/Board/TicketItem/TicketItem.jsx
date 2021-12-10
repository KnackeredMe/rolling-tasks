import React, {useEffect, useState} from 'react';
import {StyledTicketItem} from "./TicketItem.styled";
import {StyledInfoBar} from "./InfoBar/InfoBar.styled";
import userIcon from "../../../Assets/Images/userIcon.png"
import TicketDetails from "../TicketDetails/TicketDetails";
import {Link, Route} from 'react-router-dom';
import BugReportIcon from '@mui/icons-material/BugReport';
import AddTaskIcon from '@mui/icons-material/AddTask';
import BoltIcon from '@mui/icons-material/Bolt';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BlockIcon from '@mui/icons-material/Block';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CheckIcon from '@mui/icons-material/Check';
import {SvgIcon} from "@mui/material";

const iconDict = {
    BUG: {
        icon: BugReportIcon,
        color: 'red',
    },
    TASK: {
        icon: AddTaskIcon,
        color: 'blue',
    },
    'SUBTASK': {
        icon: CheckIcon,
        color: 'blue',
    },
    'SPIKE': {
        icon: ArrowUpwardIcon,
        color: 'blue',
    },
    'EPIC': {
        icon: BoltIcon,
        color: 'orange',
    },
    'STORY': {
        icon: LightbulbIcon,
        color: 'orange',
    },
    'BLOCKER': {
        icon:  BlockIcon,
        color: 'red',
    },
    'HIGH': {
        icon: KeyboardDoubleArrowUpIcon,
        color: 'red',
    },
    'MEDIUM': {
        icon: KeyboardArrowUpIcon,
        color: 'red',
    },
    'LOW': {
        icon: KeyboardArrowDownIcon,
        color: 'green',
    },
    'HARD': {
        icon: KeyboardDoubleArrowUpIcon,
        color: 'red',
    },
}

function TicketItem(ticket) {
    useEffect(() => {
        console.log(ticket.ticket)
    }, [])
    return (
        <StyledTicketItem>
            <Link to={`/board/${ticket.ticket.id}`}>
                <h3 className={'ticketName'}>{ticket.ticket.title}</h3>
                <ul className={'ticketInfo'}>
                    <li className={'ticketInfoItem'}>
                        <SvgIcon component={iconDict[ticket.ticket.type]?.icon} style={{fill: iconDict[ticket.ticket.type]?.color}}/>
                        <p>Type</p>
                    </li>
                    <li className={'ticketInfoItem'}>
                        <SvgIcon component={iconDict[ticket.ticket.priority]?.icon} style={{fill: iconDict[ticket.ticket.priority]?.color}}/>
                        <p>Priority</p>
                    </li>
                    <li className={'ticketInfoItem'}>
                        <SvgIcon component={iconDict[ticket.ticket.complexity]?.icon} style={{fill: iconDict[ticket.ticket.complexity]?.color}}/>
                        <p>Complexity</p>
                    </li>
                    <li className={'ticketInfoItem'}>
                        <img className={'userPhoto'} src={userIcon} alt={'user'}/>
                        <p>Assignee</p>
                    </li>
                </ul>
            </Link>
            <Route exact path={`/board/${ticket.ticket.id}`}>
                <TicketDetails open={true} ticket={ticket.ticket}/>
            </Route>
        </StyledTicketItem>
    );
}

export default TicketItem;
