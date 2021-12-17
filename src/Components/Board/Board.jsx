import React, {createContext, useEffect, useState} from 'react';
import {StyledBoard} from "./Board.styled";
import StatusRow from "./StatusRow/StatusRow";
import {deleteRow, getBoard, postRow, postTickets} from "../../Store/requests";
import NewRowForm from "../Forms/NewRowForm/NewRowForm";
import NewTaskForm from "../Forms/NewTaskForm/NewTaskForm";

export const RowsContext = createContext({});

function Board() {
    const [boardId, setBoardId] = useState('');
    const [boardName, setBoardName] = useState('');
    const [rows, setRows] = useState([]);
    const [newRowFormActive, setNewRowFormActive] = useState(false);
    const [newTaskFormActive, setNewTaskFormActive] = useState(false);
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
                const newRows = [];
                prevState.forEach((row, index) => {
                    if (row.id === taskRow) {
                        row.tickets.push(result.data);
                    }
                    newRows.push(row);
                })
                return newRows;
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
                                <button className={'chatButton'} type={"button"}/>
                            </div>
                            <div className={'boardHeaderActions'}>
                                <button className={`createTaskButton`} onClick={onTaskFormOpen} type={"button"}>Create Task</button>
                                <button className={'addListButton'} onClick={onRowFormOpen} type={"button"}>Add Row</button>
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
                    </div>
                )}
            </StyledBoard>
        </RowsContext.Provider>
    );
}

export default Board;
