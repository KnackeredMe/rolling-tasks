import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {StyledTicketDetails} from "./TicketDetails.styled";
import closeIcon from '../../../Assets/Images/closeIcon.svg'
import {useEffect, useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import {getTicket, getTickets} from "../../../Store/requests";
import {MenuItem, Select, SvgIcon} from "@mui/material";
import userIcon from "../../../Assets/Images/userIcon.png";
import {iconDict} from "../../../Utils/constants";
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

export default function TicketDetails({open, ticket}) {
    const [id, setId] = useState('');
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [row, setRow] = useState([]);
    const [complexity, setComplexity] = useState('');
    const [assignee, setAssignee] = useState('');
    // const history = useHistory();


    useEffect(() => {
        // if (!ticket) {
        //     const historyId = history.location.pathname.split('/').slice(-1)[0];
        //     getTicket(historyId).then(result => {
        //         ticket = result.data;
        //     })
        // }
        setId(ticket.id);
        setType(ticket.type);
        setPriority(ticket.priority);
        setTitle(ticket.title);
        setRow(ticket.position);
        setComplexity(ticket.complexity);
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

    return (
        <StyledTicketDetails open={open}>
            <h1>{title}</h1>
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
                               onChange={onChangeName}
                    />
                </div>
                <div className={'edit'}>
                    <label className={'edit-label'}>Edit</label>
                    <ul className={'edit__list'}>
                        <li className={'edit__list-item'}>
                            <div className={'edit__list-value'}>
                                <SvgIcon className={'edit__list-icon'} component={iconDict[type]?.icon} style={{fill: iconDict[type]?.color}}/>
                                <p style={{color: iconDict[type]?.color}}>{type}</p>
                            </div>
                            <p>Type</p>
                        </li>
                        <li className={'edit__list-item'}>
                            <div className={'edit__list-value'}>
                                <SvgIcon className={'edit__list-icon'} component={iconDict[priority]?.icon} style={{fill: iconDict[priority]?.color}}/>
                                <p style={{color: iconDict[priority]?.color}}>{ticket.priority.type}</p>
                            </div>
                            <p>Priority</p>
                        </li>
                        <li className={'edit__list-item'}>
                            <div className={'edit__list-value'}>
                                <SvgIcon className={'edit__list-icon'} component={iconDict[complexity]?.icon} style={{fill: iconDict[complexity]?.color}}/>
                                <p style={{color: iconDict[complexity]?.color}}>{complexity}</p>
                            </div>
                            <p>Complexity</p>
                        </li>
                        <li className={'edit__list-item'}>
                            <img className={'userPhoto'} src={userIcon} alt={'user'}/>
                            <p>Assignee</p>
                        </li>

                    </ul>
                    <div className={'task-type select'}>
                        <label className={'task-type-label'}>Type</label>
                        <Select
                            value={type}
                            onChange={onChangeType}
                            displayEmpty
                        >
                            <MenuItem className={'select-item'} value={'BUG'}>Bug<BugReportIcon style={{fill: "red"}}/></MenuItem>
                            <MenuItem className={'select-item'} value={'TASK'}>Task<AddTaskIcon style={{fill: "blue"}}/></MenuItem>
                            <MenuItem className={'select-item'} value={'SUBTASK'}>Subtask<CheckIcon style={{fill: "blue"}}/></MenuItem>
                            <MenuItem className={'select-item'} value={'SPIKE'}>Spike<ArrowUpwardIcon style={{fill: "green"}}/></MenuItem>
                            <MenuItem className={'select-item'} value={'EPIC'}>Epic<BoltIcon style={{fill: "orange"}}/></MenuItem>
                            <MenuItem className={'select-item'} value={'STORY'}>Story<LightbulbIcon style={{fill: "orange"}}/></MenuItem>
                        </Select>
                    </div>
                    <div className={'task-priority select'}>
                        <label className={'task-priority-label'}>Priority</label>
                        <Select
                            value={priority}
                            onChange={onChangePriority}
                            displayEmpty
                        >
                            <MenuItem className={'select-item'} value={'BLOCKER'}>Blocker<BlockIcon style={{fill: "red"}}/></MenuItem>
                            <MenuItem className={'select-item'} value={'HIGH'}>High<KeyboardDoubleArrowUpIcon style={{fill: "red"}}/></MenuItem>
                            <MenuItem className={'select-item'} value={'MEDIUM'}>Medium<KeyboardArrowUpIcon style={{fill: "orange"}}/></MenuItem>
                            <MenuItem className={'select-item'} value={'LOW'}>Low<KeyboardArrowDownIcon style={{fill: "green"}}/></MenuItem>
                        </Select>
                    </div>
                    <div className={'task-complexity select'}>
                        <label className={'task-complexity-label'}>Complexity</label>
                        <Select
                            value={complexity}
                            onChange={onChangeComplexity}
                            displayEmpty
                        >
                            <MenuItem className={'select-item'} value={'HARD'}>High<KeyboardDoubleArrowUpIcon style={{fill: "red"}}/></MenuItem>
                            <MenuItem className={'select-item'} value={'MEDIUM'}>Medium<KeyboardArrowUpIcon style={{fill: "orange"}}/></MenuItem>
                            <MenuItem className={'select-item'} value={'LOW'}>Low<KeyboardArrowDownIcon style={{fill: "green"}}/></MenuItem>
                        </Select>
                    </div>
                    <div className={'task-assignee select'}>
                        <label className={'task-assignee-label'}>Assignee</label>
                        <Select
                            value={assignee}
                            onChange={onChangeAssignee}
                            displayEmpty
                        >
                            <MenuItem value={'User 1'}>User 1</MenuItem>
                            <MenuItem value={'User 2'}>User 2</MenuItem>
                            <MenuItem value={'User 3'}>User 3</MenuItem>
                            <MenuItem value={'User 4'}>User 4</MenuItem>
                            <MenuItem value={'User 5'}>User 5</MenuItem>
                        </Select>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button>Create</Button>
                <Link to={'/board'} className={'close'}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Link>
            </DialogActions>
        </StyledTicketDetails>
    );
}
