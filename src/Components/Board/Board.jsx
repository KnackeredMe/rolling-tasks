import React, {useEffect, useState} from 'react';
import {StyledBoard} from "./Board.styled";
import StatusRow from "./StatusRow/StatusRow";
import {defaultColors} from "../../Utils/defaultColors";
import {getBoard, getRows} from "../../Store/requests";

function Board() {
    const [board, setBoard] = useState();
    const [rows, setRows] = useState([]);
    useEffect(() => {
        getBoard('9e6b17e7-360b-492a-ba9a-ae8076d8b665').then(result => setBoard(result.data));
        getRows().then(result => setRows(result.data));
    }, [])

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
                            <button className={'addListButton'} type={"button"}>Add List</button>
                        </div>
                    </div>
                    {rows.map(row =>
                        <StatusRow key={row.id} rowId={row.id} rowName={row.title} rowColor={defaultColors[row.color] ? defaultColors[row.color] : 'grey'}/>
                    )}
                </div>
            )}
        </StyledBoard>
    );
}

export default Board;
