import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {StyledTicketDetails} from "./TicketDetails.styled";
import closeIcon from '../../../Assets/Images/closeIcon.svg'
import {useContext, useEffect, useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import {MenuItem, Select} from "@mui/material";
import userIcon from "../../../Assets/Images/userIcon.png";
import BugReportIcon from "@mui/icons-material/BugReport";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CheckIcon from "@mui/icons-material/Check";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import BoltIcon from "@mui/icons-material/Bolt";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BlockIcon from "@mui/icons-material/Block";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from '@mui/icons-material/Edit';
import {RowsContext, UsersContext} from "../Board";
import {deleteTicket, putTicket} from "../../../Store/requests";
import {validationMessages} from "../../../Utils/constants";

export default function TicketDetails({open, ticket, setCurrentUserName, setCurrentUserSurname}) {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('');
    const [priority, setPriority] = useState('');
    const [row, setRow] = useState([]);
    const [complexity, setComplexity] = useState('');
    const [assignee, setAssignee] = useState('');
    const [description, setDescription] = useState('');
    const {rows, setRows} = useContext(RowsContext);
    const {users, setUsers} = useContext(UsersContext);
    const [initialRow, setInitialRow] = useState('')
    const history = useHistory()


    useEffect(() => {
        // if (!ticket) {
        //     const historyId = history.location.pathname.split('/').slice(-1)[0];
        //     getTicket(historyId).then(result => {
        //         ticket = result.data;
        //     })
        // }
        setType(ticket.type);
        setPriority(ticket.priority);
        setTitle(ticket.title);
        setComplexity(ticket.complexity);
        setDescription(ticket.description);
        setAssignee(ticket.assigneeId);
        for (const row of rows) {
            if (row.tickets) {
                for (const item of row.tickets) {
                    if (item.id === ticket.id) {
                        setInitialRow(row.id)
                        setRow(row.id);
                    }
                }
            }
        }
    }, [])



    const onChangeName = (event) => {
        setTitle(event.target.value);
        if (event.target.value === '') {
            setTitleError(validationMessages.required);
            return
        }
        setTitleError('');
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const onChangeType = (event) => {
        setType(event.target.value);
    }

    const onChangePriority = (event) => {
        setPriority(event.target.value);
    }

    const onChangeComplexity = (event) => {
        setComplexity(event.target.value);
    }

    const onChangeAssignee = (event) => {
        setAssignee(event.target.value);
    }

    const onChangeRow = (event) => {
        setRow(event.target.value);
    }

    const updateTicket = () => {
        const body = {
            "complexity": complexity,
            "position": ticket.position,
            "priority": priority,
            "rowId": row,
            "description": description,
            "tags": [
                {
                }
            ],
            "title": title,
            "type": type,
            "assignee": assignee
        }
        setCurrentUserName(users.filter((user) => {
            return assignee === user.id;
        })[0]?.firstName);
        setCurrentUserSurname(users.filter((user) => {
            return assignee === user.id;
        })[0]?.lastName);
        putTicket(body, ticket.id).then((response) => {
            setRows(prevState => {
                return prevState.map(item => {
                    if (item.id === initialRow) {
                        item.tickets = item.tickets.filter(task => task.id !== ticket.id);
                    }
                    if (item.id === row) {
                        item.tickets.push(response.data);
                    }
                    return item;
                })
            })
            history.push('/board');
        });
    }

    const removeTicket = () => {
        deleteTicket(ticket.id).then(() => {
            setRows(prevState => {
                return prevState.map(item => {
                    if (item.id === initialRow) {
                        item.tickets = item.tickets.filter(task => task.id !== ticket.id);
                    }
                    return item;
                })
            })
            history.push('/board')
        })
    }

    const handleSubmit = () => {
        if (title === '') {
            setTitleError(validationMessages.required);
            return
        }
        updateTicket()
    }

    return (
        <StyledTicketDetails open={open}>
            <h1>
                <EditIcon/>
                <TextField autoFocus
                           margin="dense"
                           id="name"
                           type="text"
                           fullWidth
                           placeholder={'Type here...'}
                           variant="standard"
                           value={title}
                           helperText={titleError}
                           onChange={onChangeName}/>
            </h1>
            <DialogContent className={'content'}>
                <div className={'description'}>
                    <label className={'description-label'}>Description</label>
                    <TextField className={'description-input'}
                               autoFocus
                               margin="dense"
                               id="name"
                               type="text"
                               fullWidth
                               value={description}
                               placeholder={'Type here...'}
                               variant="standard"
                               onChange={onChangeDescription}
                               multiline={true}
                    />
                </div>
                <div className={'edit'}>
                    <label className={'edit-label'}>Edit</label>
                    <div className={'select-wrapper'}>
                        <div className={'task-type select'}>
                            <Select
                                value={type}
                                onChange={onChangeType}
                                displayEmpty
                            >
                                <MenuItem className={'select-item'} value={'BUG'}>Bug<BugReportIcon className={'select-item-icon'}  style={{fill: "red"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'TASK'}>Task<AddTaskIcon className={'select-item-icon'}  style={{fill: "blue"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'SUBTASK'}>Subtask<CheckIcon className={'select-item-icon'}  style={{fill: "blue"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'SPIKE'}>Spike<ArrowUpwardIcon className={'select-item-icon'}  style={{fill: "green"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'EPIC'}>Epic<BoltIcon className={'select-item-icon'}  style={{fill: "orange"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'STORY'}>Story<LightbulbIcon className={'select-item-icon'}  style={{fill: "orange"}}/></MenuItem>
                            </Select>
                            <label className={'task-type-label'}>Type</label>
                        </div>
                        <div className={'task-priority select'}>
                            <Select
                                value={priority}
                                onChange={onChangePriority}
                                displayEmpty
                            >
                                <MenuItem className={'select-item'} value={'BLOCKER'}>Blocker<BlockIcon className={'select-item-icon'}  style={{fill: "red"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'HIGH'}>High<KeyboardDoubleArrowUpIcon className={'select-item-icon'}  style={{fill: "red"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'MEDIUM'}>Medium<KeyboardArrowUpIcon className={'select-item-icon'}  style={{fill: "orange"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'LOW'}>Low<KeyboardArrowDownIcon className={'select-item-icon'}  style={{fill: "green"}}/></MenuItem>
                            </Select>
                            <label className={'task-priority-label'}>Priority</label>
                        </div>
                        <div className={'task-complexity select'}>
                            <Select
                                value={complexity}
                                onChange={onChangeComplexity}
                                displayEmpty
                            >
                                <MenuItem className={'select-item'} value={'HARD'}>Hard<KeyboardDoubleArrowUpIcon className={'select-item-icon'}  style={{fill: "red"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'MEDIUM'}>Medium<KeyboardArrowUpIcon className={'select-item-icon'}  style={{fill: "orange"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'EASY'}>Easy<KeyboardArrowDownIcon className={'select-item-icon'}  style={{fill: "green"}}/></MenuItem>
                            </Select>
                            <label className={'task-complexity-label'}>Complexity</label>
                        </div>
                        <div className={'task-assignee select'}>
                            <Select
                                value={assignee}
                                onChange={onChangeAssignee}
                                displayEmpty>
                                {
                                    users && users.map(assignee =>
                                        <MenuItem key={assignee.id} value={assignee.id}>{assignee.firstName} {assignee.lastName} <img className={'select-user-icon'} src={userIcon} alt={'user'}/></MenuItem>
                                    )
                                }
                            </Select>
                            <label className={'task-assignee-label'}>Assignee</label>
                        </div>
                        <div className={'task-row select'}>
                            <Select
                                value={row}
                                onChange={onChangeRow}
                                displayEmpty>
                                {
                                    rows && rows.map(row =>
                                        <MenuItem key={row.id} value={row.id}>{row.title}
                                            <div className={'select-item-color-container'}><div className={'select-item-color'} style={{backgroundColor: row.color}}> </div></div>
                                        </MenuItem>
                                    )
                                }
                            </Select>
                            <label className={'task-row-label'}>Row</label>
                        </div>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={removeTicket}>Delete</Button>
                <Button onClick={handleSubmit}>Save</Button>
                <Link to={'/board'} className={'close'}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Link>
            </DialogActions>
        </StyledTicketDetails>
    );
}
