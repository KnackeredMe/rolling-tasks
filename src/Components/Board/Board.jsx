import React, {createContext, useEffect, useState} from 'react';
import {StyledBoard} from "./Board.styled";
import StatusRow from "./StatusRow/StatusRow";
import {deleteRow, getBoard, postRow, postTickets} from "../../Store/requests";
import NewRowForm from "../Forms/NewRowForm/NewRowForm";
import NewTaskForm from "../Forms/NewTaskForm/NewTaskForm";
import AddIcon from '@mui/icons-material/Add';
import Messenger from "./Sidebar/Messenger/Messenger";
import Sidebar from "./Sidebar/Sidebar";

export const RowsContext = createContext({});

function Board() {
    const [boardId, setBoardId] = useState('');
    const [boardName, setBoardName] = useState('');
    const [rows, setRows] = useState([]);
    const [newRowFormActive, setNewRowFormActive] = useState(false);
    const [newTaskFormActive, setNewTaskFormActive] = useState(false);
    const [messengerActive, setMessengerActive] = useState(false);
    useEffect(() => {
        getBoard('3fe23621-4982-4143-a01e-aa47d6532b75').then(result => {
            setBoardId(result.data.id);
            setBoardName(result.data.name);
            setRows(result.data.rows);
        });
    }, [])

    const onRowFormOpen = () => {
        setNewRowFormActive(true);
    };

    const onRowFormClose = () => {
        setNewRowFormActive(false)
    };

    const createRow = (rowName, rowColor) => {
        const body = {
            "boardId": boardId,
            "color": rowColor,
            "position": rows.length,
            "title": rowName,
        }
        postRow(body).then(result => setRows(prevState => [...prevState, result.data]))
    }

    const removeRow = (rowId) => {
        deleteRow(rowId).then(() => setRows(prevState => prevState.filter(row => row.id !== rowId)))
    }

    const onTaskFormOpen = () => {
        setNewTaskFormActive(true);
    };

    const onTaskFormClose = () => {
        setNewTaskFormActive(false)
    };

    const openChat = () => {
        setMessengerActive(prevState => !prevState);
    }

    const createTicket = (taskName, taskType, taskPriority, taskComplexity, taskAssignee, taskRow, taskPosition) => {
        const body = {
            'complexity': taskComplexity,
            'rowId': taskRow,
            'position': taskPosition,
            'priority': taskPriority,
            'tags': [],
            'title': taskName,
            'type': taskType,
        }
        postTickets(body).then(result => {
            setRows(prevState => {
                return prevState.map((row, index) => {
                    if (row.id === taskRow) {
                        row.tickets.push(result.data);
                    }
                    return row;
                })
            })
        })
    }

    return (
        <RowsContext.Provider value={{rows, setRows}}>
            <StyledBoard>
                {boardName && (
                    <div>
                        <div className={'boardHeader'}>
                            <div className={'boardHeaderActions'}>
                                <h1 className={'boardName'}>{boardName}</h1>
                                <button className={'chatButton'} type={"button"} onClick={openChat}/>
                            </div>
                            <div className={'boardHeaderActions'}>
                                <button className={`createTaskButton`} onClick={onTaskFormOpen} type={"button"}>Create Task <AddIcon/></button>
                                <button className={'addListButton'} onClick={onRowFormOpen} type={"button"}>Add Row <AddIcon/></button>
                            </div>
                        </div>
                        {rows && rows.map(row =>
                            <StatusRow key={row.id}
                                       rowId={row.id}
                                       rowName={row.title}
                                       rowColor={row.color}
                                       tickets={row.tickets}
                                       deleteRow={removeRow}/>
                        )}
                        <NewRowForm open={newRowFormActive} handleClose={onRowFormClose} createRow={createRow}/>
                        <NewTaskForm open={newTaskFormActive} handleClose={onTaskFormClose} createTask={createTicket} rows={rows}/>
                        <Sidebar boardName={boardName} messengerActive={messengerActive}/>
                    </div>
                )}
            </StyledBoard>
        </RowsContext.Provider>
    );
}

export default Board;
