import React from 'react';
import {StyledNavigation} from "./Navigation.styled";

function Navigation({children}) {
    return (
        <StyledNavigation>
            {children}
        </StyledNavigation>
    );
}

export default Navigation;
