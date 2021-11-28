import React, {useEffect, useState} from 'react';
import {StyledBoard} from "./Board.styled";
import StatusRow from "./StatusRow/StatusRow";
import {defaultColors} from "../../Utils/defaultColors";
import {getBoard, getRows, postRow} from "../../Store/requests";
import NewRowForm from "../Forms/NewRowForm/NewRowForm";

function Board() {
    const [board, setBoard] = useState();
    const [rows, setRows] = useState([]);
    const [newRowFormActive, setNewRowFormActive] = useState(false);
    useEffect(() => {
        createRow();
        getBoard('3fe23621-4982-4143-a01e-aa47d6532b75').then(result => setBoard(result.data));
        getRows();
    }, [])

    const onRowFormOpen = () => {
        setNewRowFormActive(true);
    };

    const onRowFormClose = () => {
        setNewRowFormActive(false)
    };

    const createRow = () => {
        const body = {
            "boardId": "3fe23621-4982-4143-a01e-aa47d6532b75",
            "color": "#32a871",
            "position": 0,
            "title": "Done"
        }
        postRow(body).then(result => console.log(result))
    }

    return (
        <StyledBoard>
            {board && (
                <div>
                    <div className={'boardHeader'}>
                        <div className={'boardHeaderActions'}>
                            <h1 className={'boardName'}>{board.name}</h1>
                            <button className={'chatButton'} type={"button"}/>
                        </div>
                        <div className={'boardHeaderActions'}>
                            <button className={`createTaskButton`} type={"button"}>Create Task</button>
                            <button className={'addListButton'} onClick={onRowFormOpen} type={"button"}>Add Row</button>
                        </div>
                    </div>
                    {rows.map(row =>
                        <StatusRow key={row.id} rowId={row.id} rowName={row.title} rowColor={defaultColors[row.color] ? defaultColors[row.color] : 'grey'}/>
                    )}
                    <NewRowForm open={newRowFormActive} handleClose={onRowFormClose}/>
                </div>
            )}
        </StyledBoard>
    );
}

export default Board;
