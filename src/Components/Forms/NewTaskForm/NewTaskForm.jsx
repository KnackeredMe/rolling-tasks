import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {StyledNewTaskForm} from "./NewTaskForm.styled";
import closeIcon from '../../../Assets/Images/closeIcon.svg'
import {useState} from "react";
import {FormHelperText, MenuItem, Select} from "@mui/material";
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
import {validationMessages} from "../../../Utils/constants";

export default function NewTaskForm({open, handleClose, createTask, rows}) {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('')
    const [type, setType] = useState('');
    const [typeError, setTypeError] = useState('');
    const [priority, setPriority] = useState('');
    const [priorityError, setPriorityError] = useState('');
    const [complexity, setComplexity] = useState('');
    const [complexityError, setComplexityError] = useState('');
    const [assignee, setAssignee] = useState('');
    const [row, setRow] = useState('');
    const [rowError, setRowError] = useState('')

    const onChangeName = (event) => {
        setName(event.target.value);
        if (event.target.value === '') {
            setNameError(validationMessages.required);
            return
        }
        setNameError('');
    }

    const onChangeType = (event) => {
        setType(event.target.value);
        if (event.target.value === '') {
            setTypeError(validationMessages.required);
            return
        }
        setTypeError('');
    }

    const onChangePriority = (event) => {
        setPriority(event.target.value);
        if (event.target.value === '') {
            setPriorityError(validationMessages.required);
            return
        }
        setPriorityError('');
    }

    const onChangeComplexity = (event) => {
        setComplexity(event.target.value);
        if (event.target.value === '') {
            setComplexityError(validationMessages.required);
            return
        }
        setComplexityError('');
    }

    const onChangeAssignee = (event) => {
        setAssignee(event.target.value);
    }

    const onChangeRow = (event) => {
        setRow(event.target.value);
        if (event.target.value === '') {
            setRowError(validationMessages.required);
            return
        }
        setRowError('');
    }

    const handleSubmit = () => {
        if (name === '') {
            setNameError(validationMessages.required);
        }
        if (type === '') {
            setTypeError(validationMessages.required);
        }
        if (priority === '') {
            setPriorityError(validationMessages.required);
        }
        if (complexity === '') {
            setComplexityError(validationMessages.required);
        }
        if (row === '') {
            setRowError(validationMessages.required);
        }
        if (name === '' || type === '' || priority === '' || complexity === '' || row === '') {
            return;
        }
        createTask(name, type, priority, complexity, assignee, row, row.tickets ? row.tickets.length() - 1 : 0);
        handleClose();
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
                               helperText={nameError}
                               onChange={onChangeName}
                               required={true}
                    />
                </div>
                <div className={'task-type select'}>
                    <label className={'task-type-label'}>Type</label>
                    <Select
                        value={type}
                        onChange={onChangeType}
                        displayEmpty
                    >
                        <MenuItem className={'select-item'} value={'BUG'}>Bug<BugReportIcon className={'select-item-icon'} style={{fill: "red"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'TASK'}>Task<AddTaskIcon className={'select-item-icon'} style={{fill: "blue"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'SUBTASK'}>Subtask<CheckIcon className={'select-item-icon'} style={{fill: "blue"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'SPIKE'}>Spike<ArrowUpwardIcon className={'select-item-icon'} style={{fill: "green"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'EPIC'}>Epic<BoltIcon className={'select-item-icon'} style={{fill: "orange"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'STORY'}>Story<LightbulbIcon className={'select-item-icon'} style={{fill: "orange"}}/></MenuItem>
                    </Select>
                    <FormHelperText className={'select-message'}>{typeError}</FormHelperText>
                </div>
                <div className={'task-priority select'}>
                    <label className={'task-priority-label'}>Priority</label>
                    <Select
                        value={priority}
                        onChange={onChangePriority}
                        displayEmpty
                    >
                        <MenuItem className={'select-item'} value={'BLOCKER'}>Blocker<BlockIcon className={'select-item-icon'} style={{fill: "red"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'HIGH'}>High<KeyboardDoubleArrowUpIcon className={'select-item-icon'} style={{fill: "red"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'MEDIUM'}>Medium<KeyboardArrowUpIcon className={'select-item-icon'} style={{fill: "orange"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'LOW'}>Low<KeyboardArrowDownIcon className={'select-item-icon'} style={{fill: "green"}}/></MenuItem>
                    </Select>
                    <FormHelperText className={'select-message'}>{priorityError}</FormHelperText>
                </div>
                <div className={'task-complexity select'}>
                    <label className={'task-complexity-label'}>Complexity</label>
                    <Select
                        value={complexity}
                        onChange={onChangeComplexity}
                        displayEmpty
                    >
                        <MenuItem className={'select-item'} value={'HARD'}>HARD<KeyboardDoubleArrowUpIcon className={'select-item-icon'} style={{fill: "red"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'MEDIUM'}>Medium<KeyboardArrowUpIcon className={'select-item-icon'} style={{fill: "orange"}}/></MenuItem>
                        <MenuItem className={'select-item'} value={'EASY'}>EASY<KeyboardArrowDownIcon className={'select-item-icon'} style={{fill: "green"}}/></MenuItem>
                    </Select>
                    <FormHelperText className={'select-message'}>{complexityError}</FormHelperText>
                </div>
                <div className={'task-assignee select'}>
                    <label className={'task-assignee-label'}>Assignee</label>
                    <Select
                        value={assignee}
                        onChange={onChangeAssignee}
                        displayEmpty
                    >
                        <MenuItem value={'User 1'}>User 1<img className={'select-item-icon'} src={userIcon} alt='user' style={{width: "30px"}}/></MenuItem>
                        <MenuItem value={'User 2'}>User 2<img className={'select-item-icon'} src={userIcon} alt='user' style={{width: "30px"}}/></MenuItem>
                        <MenuItem value={'User 3'}>User 3<img className={'select-item-icon'} src={userIcon} alt='user' style={{width: "30px"}}/></MenuItem>
                        <MenuItem value={'User 4'}>User 4<img className={'select-item-icon'} src={userIcon} alt='user' style={{width: "30px"}}/></MenuItem>
                        <MenuItem value={'User 5'}>User 5<img className={'select-item-icon'} src={userIcon} alt='user' style={{width: "30px"}}/></MenuItem>
                    </Select>
                    {/*<FormHelperText>With label + helper text</FormHelperText>*/}
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
                                    <div className={'select-item-color-container'}><div className={'select-item-color'} style={{backgroundColor: row.color}}> </div></div>
                                </MenuItem>
                            )
                        }
                    </Select>
                    <FormHelperText className={'select-message'}>{rowError}</FormHelperText>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {handleSubmit()}}>Create</Button>
                <Button className={'close'} onClick={() => handleClose()}>
                    <img src={closeIcon} alt={'close icon'}/>
                </Button>
            </DialogActions>
        </StyledNewTaskForm>
    );
}
