import React, {Component} from 'react';
import logo from '../../Assets/Images/logo.png'
import {StyledLogo} from "./Logo.styled";

export class Logo extends Component {
    render() {
        return (
            <StyledLogo className={'logo'} href={"https://www.google.com/"}>
                <img src={logo} alt='logo'/>
            </StyledLogo>
        );
    }
}
