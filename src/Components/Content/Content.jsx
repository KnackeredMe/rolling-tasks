import React from 'react';
import {Container} from "../Container/Container";
import {StyledContent} from "./Content.styled";

function Content({children}) {
    return (
        <StyledContent>
            <Container>
                {children}
            </Container>
        </StyledContent>
    );
}

export default Content;
