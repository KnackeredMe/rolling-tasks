import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {StyledNewTaskForm} from "./NewTaskForm.styled";
import closeIcon from '../../../Assets/Images/closeIcon.svg'
import {useState} from "react";
import {MenuItem, Select} from "@mui/material";
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
import userIcon from '../../../Assets/Images/userIcon.png'

export default function NewTaskForm({open, handleClose, createTask, rows}) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [priority, setPriority] = useState('');
    const [complexity, setComplexity] = useState('');
    const [assignee, setAssignee] = useState('');
    const [row, setRow] = useState('');

    const onChangeName = (event) => {
        setName(event.target.value);
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
        <StyledNewTaskForm open={open}>
            <DialogContent className={'content'}>
                <div className={'task-name'}>
                    <label className={'task-name-label'}>Task</label>
                    <TextField className={'task-name-input'}
                               autoFocus
                               margin="dense"
                               id="name"
                               type="text"
                               fullWidth
                               variant="standard"
                               onChange={onChangeName}
                    />
                </div>
                <div className={'task-type select'}>
                    <label className={'task-type-label'}>Type</label>
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
                </div>
                <div className={'task-priority select'}>
                    <label className={'task-priority-label'}>Priority</label>
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
                </div>
                <div className={'task-complexity select'}>
                    <label className={'task-complexity-label'}>Complexity</label>
                    <Select
                        value={complexity}
                        onChange={onChangeComplexity}
                        displayEmpty
                    >
                        <MenuItem className={'select-item'} value={'HARD'}>HARD<KeyboardDoubleArrowUpIcon style={{fill: "red", marginLeft: "auto"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'MEDIUM'}>Medium<KeyboardArrowUpIcon style={{fill: "orange", marginLeft: "auto"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'EASY'}>EASY<KeyboardArrowDownIcon style={{fill: "green", marginLeft: "auto"}}/></MenuItem>
                    </Select>
                </div>
                <div className={'task-assignee select'}>
                    <label className={'task-assignee-label'}>Assignee</label>
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
                </div>
                <div className={'task-row select'}>
                    <label className={'task-row-label'}>Row</label>
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
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {createTask(name, type, priority, complexity, assignee, row, row.tickets ? row.tickets.length() - 1 : 0); handleClose()}}>Create</Button>
                <Button className={'close'} onClick={() => handleClose()}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Button>
            </DialogActions>
        </StyledNewTaskForm>
    );
}
