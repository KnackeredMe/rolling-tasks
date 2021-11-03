import React, {useEffect} from 'react';
import {StyledBoard} from "./Board.styled";
import StatusRow from "./StatusRow/StatusRow";
import {defaultColors} from "../../Utils/defaultColors";
import {getBoard} from "../../Store/requests";

function Board() {
    useEffect(() => {
        getBoard();
    }, [])

    return (
        <StyledBoard>
            <div className={'boardHeader'}>
                <div className={'boardHeaderActions'}>
                    <h1 className={'boardName'}>Board name</h1>
                    <button className={'chatButton'} type={"button"}/>
                </div>
                <div className={'boardHeaderActions'}>
                    <button className={`createTaskButton`} type={"button"}>Create Task</button>
                    <button className={'addListButton'} type={"button"}>Add List</button>
                </div>
            </div>
            <StatusRow rowName={'To do'} rowColor={defaultColors.red}/>
            <StatusRow rowName={'In progress'} rowColor={defaultColors.orange}/>
            <StatusRow rowName={'Done'} rowColor={defaultColors.yellow}/>
        </StyledBoard>
    );
}

export default Board;
