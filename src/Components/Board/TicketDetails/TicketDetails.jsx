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
import {RowsContext} from "../Board";
import {deleteTicket, getTickets, putTicket} from "../../../Store/requests";

export default function TicketDetails({open, ticket}) {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [row, setRow] = useState([]);
    const [complexity, setComplexity] = useState('');
    const [assignee, setAssignee] = useState('');
    const {rows, setRows} = useContext(RowsContext);
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
            "tags": [
                {
                    "name": "string"
                }
            ],
            "title": title,
            "type": type
        }
        putTicket(body, ticket.id).then((response) => {
            setRows(prevState => {
                let newRows = [];
                prevState.forEach(item => {
                    if (item.id === initialRow) {
                        item.tickets = item.tickets.filter(task => task.id !== ticket.id);
                    }
                    if (item.id === row) {
                        item.tickets.push(response.data);
                    }
                    newRows.push(item);
                })
                return newRows;
            })
            history.push('/board');
        });
    }

    const removeTicket = () => {
        deleteTicket(ticket.id).then(() => {
            setRows(prevState => {
                let newRows = [];
                prevState.forEach(item => {
                    if (item.id === initialRow) {
                        item.tickets = item.tickets.filter(task => task.id !== ticket.id);
                    }
                    newRows.push(item);
                })
                return newRows;
            })
            history.push('/board')
        })
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
                               placeholder={'Type here...'}
                               variant="standard"
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
                                <MenuItem className={'select-item'} value={'BUG'}>Bug<BugReportIcon style={{fill: "red", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'TASK'}>Task<AddTaskIcon style={{fill: "blue", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'SUBTASK'}>Subtask<CheckIcon style={{fill: "blue", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'SPIKE'}>Spike<ArrowUpwardIcon style={{fill: "green", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'EPIC'}>Epic<BoltIcon style={{fill: "orange", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'STORY'}>Story<LightbulbIcon style={{fill: "orange", marginLeft: "auto"}}/></MenuItem>
                            </Select>
                            <label className={'task-type-label'}>Type</label>
                        </div>
                        <div className={'task-priority select'}>
                            <Select
                                value={priority}
                                onChange={onChangePriority}
                                displayEmpty
                            >
                                <MenuItem className={'select-item'} value={'BLOCKER'}>Blocker<BlockIcon style={{fill: "red", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'HIGH'}>High<KeyboardDoubleArrowUpIcon style={{fill: "red", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'MEDIUM'}>Medium<KeyboardArrowUpIcon style={{fill: "orange", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'LOW'}>Low<KeyboardArrowDownIcon style={{fill: "green", marginLeft: "auto"}}/></MenuItem>
                            </Select>
                            <label className={'task-priority-label'}>Priority</label>
                        </div>
                        <div className={'task-complexity select'}>
                            <Select
                                value={complexity}
                                onChange={onChangeComplexity}
                                displayEmpty
                            >
                                <MenuItem className={'select-item'} value={'HARD'}>Hard<KeyboardDoubleArrowUpIcon style={{fill: "red", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'MEDIUM'}>Medium<KeyboardArrowUpIcon style={{fill: "orange", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem className={'select-item'} value={'LOW'}>Low<KeyboardArrowDownIcon style={{fill: "green", marginLeft: "auto"}}/></MenuItem>
                            </Select>
                            <label className={'task-complexity-label'}>Complexity</label>
                        </div>
                        <div className={'task-assignee select'}>
                            <Select
                                value={assignee}
                                onChange={onChangeAssignee}
                                displayEmpty
                            >
                                <MenuItem value={'User 1'}>User 1<img src={userIcon} alt='user' style={{width: "30px", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem value={'User 2'}>User 2<img src={userIcon} alt='user' style={{width: "30px", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem value={'User 3'}>User 3<img src={userIcon} alt='user' style={{width: "30px", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem value={'User 4'}>User 4<img src={userIcon} alt='user' style={{width: "30px", marginLeft: "auto"}}/></MenuItem>
                                <MenuItem value={'User 5'}>User 5<img src={userIcon} alt='user' style={{width: "30px", marginLeft: "auto"}}/></MenuItem>
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
                                            <span className={'select-item-color'} style={{backgroundColor: row.color, width: '15px', height: '15px', borderRadius: '3px', marginLeft: '5px'}}> </span>
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
                <Button onClick={updateTicket}>Save</Button>
                <Link to={'/board'} className={'close'}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Link>
            </DialogActions>
        </StyledTicketDetails>
    );
}
