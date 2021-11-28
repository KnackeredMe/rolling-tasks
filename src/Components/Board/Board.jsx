import React, {useEffect, useState} from 'react';
import {StyledBoard} from "./Board.styled";
import StatusRow from "./StatusRow/StatusRow";
import {defaultColors} from "../../Utils/defaultColors";
import {deleteRow, getBoard, postRow} from "../../Store/requests";
import NewRowForm from "../Forms/NewRowForm/NewRowForm";

function Board() {
    const [boardId, setBoardId] = useState('');
    const [boardName, setBoardName] = useState('');
    const [rows, setRows] = useState([]);
    const [newRowFormActive, setNewRowFormActive] = useState(false);
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
        postRow(body).then(result => console.log(result))
    }

    const removeRow = (rowId) => {
        console.log(rowId)
        deleteRow(rowId).then(result => setRows(prevState => {prevState.filter(row => row.id !== rowId)}))
    }

    return (
        <StyledBoard>
            {boardName && (
                <div>
                    <div className={'boardHeader'}>
                        <div className={'boardHeaderActions'}>
                            <h1 className={'boardName'}>{boardName}</h1>
                            <button className={'chatButton'} type={"button"}/>
                        </div>
                        <div className={'boardHeaderActions'}>
                            <button className={`createTaskButton`} type={"button"}>Create Task</button>
                            <button className={'addListButton'} onClick={onRowFormOpen} type={"button"}>Add Row</button>
                        </div>
                    </div>
                    {rows.map(row =>
                        <StatusRow key={row.id}
                                   rowId={row.id}
                                   rowName={row.title}
                                   rowColor={row.color}
                                   tickets={row.tickets}
                                   deleteRow={removeRow}/>
                    )}
                    <NewRowForm open={newRowFormActive} handleClose={onRowFormClose} createRow={createRow}/>
                </div>
            )}
        </StyledBoard>
    );
}

export default Board;
