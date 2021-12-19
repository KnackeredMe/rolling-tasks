import React from 'react';
import Messenger from "./Messenger/Messenger";
import {StyledSidebar} from "./Sidebar.styled";

function Sidebar({boardName, messengerActive}) {
    return (
        <StyledSidebar className={messengerActive ? 'opened' : 'closed'}>
            <Messenger boardName={boardName}/>
        </StyledSidebar>
    );
}

export default Sidebar;
