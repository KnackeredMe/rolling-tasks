import React, {Component} from 'react';
import {StyledContainer} from "./Container.styled";

export class Container extends Component {
    render() {
        return (
            <StyledContainer className={'container'}>{this.props.children}</StyledContainer>
        );
    }
}
