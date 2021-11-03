import React from 'react';
import {StyledLandingCard} from "./LandingCard.styled";

function LandingCard({bottom, top, left, right, imageUrl, children}) {
    return (
        <StyledLandingCard bottom={bottom} top={top} left={left} right={right} imageUrl={imageUrl}>
            {children}
        </StyledLandingCard>
    );
}

export default LandingCard;
