import React, {useContext, useEffect, useState} from 'react';
import {StyledTicketItem} from "./TicketItem.styled";
import TicketDetails from "../TicketDetails/TicketDetails";
import {Link, Route} from 'react-router-dom';
import {SvgIcon} from "@mui/material";
import {iconDict} from "../../../Utils/constants";
import {UsersContext} from "../Board";
import userIcon from "../../../Assets/Images/userIcon.png"
import {Draggable} from "react-beautiful-dnd";

function TicketItem({ticket, index}) {
    const [currentUserName, setCurrentUserName] = useState('')
    const [currentUserSurname, setCurrentUserSurname] = useState('')
    const {users, setUsers} = useContext(UsersContext);

    useEffect(() => {
        setCurrentUserName(users.filter((user) => {
            return ticket.assigneeId === user.id;
        })[0]?.firstName);
        setCurrentUserSurname(users.filter((user) => {
            return ticket.assigneeId === user.id;
        })[0]?.lastName)
    }, [users])




    return (
        <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <StyledTicketItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{...provided.draggableProps.style}} shadowColor={iconDict[ticket.type]?.color}>
                        <Link to={`/board/${ticket.id}`}>
                            <h3 className={'ticket__name'}>{ticket.title}</h3>
                            <ul className={'ticket__info'}>
                                <li className={'ticket__info-item'}>
                                    <div className={'ticket__info-value'}>
                                        <SvgIcon className={'ticket__info-icon'} component={iconDict[ticket.type]?.icon} style={{fill: iconDict[ticket.type]?.color}}/>
                                        <p style={{color: iconDict[ticket.type]?.color}}>{ticket.type}</p>
                                    </div>
                                    <p>Type</p>
                                </li>
                                <li className={'ticket__info-item'}>
                                    <div className={'ticket__info-value'}>
                                        <SvgIcon className={'ticket__info-icon'} component={iconDict[ticket.priority]?.icon} style={{fill: iconDict[ticket.priority]?.color}}/>
                                        <p style={{color: iconDict[ticket.priority]?.color}}>{ticket.priority}</p>
                                    </div>
                                    <p>Priority</p>
                                </li>
                                <li className={'ticket__info-item'}>
                                    <div className={'ticket__info-value'}>
                                        <SvgIcon className={'ticket__info-icon'} component={iconDict[ticket.complexity]?.icon} style={{fill: iconDict[ticket.complexity]?.color}}/>
                                        <p style={{color: iconDict[ticket.complexity]?.color}}>{ticket.complexity}</p>
                                    </div>
                                    <p>Complexity</p>
                                </li>
                                <li className={'ticket__info-item'}>
                                    <div className={'ticket__info-value'}>
                                        <img className={'userPhoto'} src={userIcon} alt={'user'}/>
                                        <p className={'userName'}>{currentUserName + ' ' + currentUserSurname}</p>
                                    </div>
                                    <p>Assignee</p>

                                </li>
                            </ul>
                        </Link>
                        <Route exact path={`/board/${ticket.id}`}>
                            <TicketDetails open={true} ticket={ticket} setCurrentUserName= {setCurrentUserName} setCurrentUserSurname= {setCurrentUserSurname}/>
                        </Route>
                    </StyledTicketItem>
                )
            }}
        </Draggable>
    );
}

export default TicketItem;
