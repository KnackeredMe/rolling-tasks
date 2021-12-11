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
import {iconDict} from "../../../Utils/constants";

function TicketItem(ticket) {
    useEffect(() => {
    }, [])
    return (
        <StyledTicketItem shadowColor={iconDict[ticket.ticket.type]?.color}>
            <Link to={`/board/${ticket.ticket.id}`}>
                <h3 className={'ticket__name'}>{ticket.ticket.title}</h3>
                <ul className={'ticket__info'}>
                    <li className={'ticket__info-item'}>
                        <div className={'ticket__info-value'}>
                            <SvgIcon className={'ticket__info-icon'} component={iconDict[ticket.ticket.type]?.icon} style={{fill: iconDict[ticket.ticket.type]?.color}}/>
                            <p style={{color: iconDict[ticket.ticket.type]?.color}}>{ticket.ticket.type}</p>
                        </div>
                        <p>Type</p>
                    </li>
                    <li className={'ticket__info-item'}>
                        <div className={'ticket__info-value'}>
                            <SvgIcon className={'ticket__info-icon'} component={iconDict[ticket.ticket.priority]?.icon} style={{fill: iconDict[ticket.ticket.priority]?.color}}/>
                            <p style={{color: iconDict[ticket.ticket.priority]?.color}}>{ticket.ticket.priority}</p>
                        </div>
                        <p>Priority</p>
                    </li>
                    <li className={'ticket__info-item'}>
                        <div className={'ticket__info-value'}>
                            <SvgIcon className={'ticket__info-icon'} component={iconDict[ticket.ticket.complexity]?.icon} style={{fill: iconDict[ticket.ticket.complexity]?.color}}/>
                            <p style={{color: iconDict[ticket.ticket.complexity]?.color}}>{ticket.ticket.complexity}</p>
                        </div>
                        <p>Complexity</p>
                    </li>
                    <li className={'ticket__info-item'}>
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
