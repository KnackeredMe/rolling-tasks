import React from 'react';
import {StyledStatusRow} from "./StatusRow.styled";
import TicketItem from "../TicketItem/TicketItem";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import {Droppable} from "react-beautiful-dnd";

function StatusRow({rowId, rowName, rowColor, tickets, deleteRow}) {
    return (
        <StyledStatusRow rowColor={rowColor}>
            <h2 className={'rowName'}><span>{rowName}</span></h2>
            {tickets && (
                <Droppable droppableId={rowId} direction="horizontal">
                    {(provided, snapshot) => {
                        return (
                            <ul className={'ticketList'} {...provided.droppableProps} ref={provided.innerRef} style={{background: snapshot.isDraggingOver ? "rgba(255, 238, 0, 0.5)" : "white"}}>
                                {tickets && tickets.map((ticket, index) =>
                                    <TicketItem key={ticket.id} ticket={ticket} index={index}/>
                                )}
                                {provided.placeholder}
                            </ul>
                        )
                    }}
                </Droppable>
            )}
            <button className={'deleteButton'} onClick={() => deleteRow(rowId)}><DeleteOutlineIcon/></button>
            <button className={'editButton'} onClick={() => {}}><EditIcon/></button>
        </StyledStatusRow>
    );
}

export default StatusRow;
