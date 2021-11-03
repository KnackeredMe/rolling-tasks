import React, {Component} from 'react';
import {Container} from "../Container/Container";
import {Logo} from "../Logo/Logo";
import {StyledHeader} from "./Header.styled";
import Navigation from "./Navigation/Navigation";

export class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <Container>
                    <Logo/>
                    <Navigation>
                        <div className={'navItem'}>
                            <a href={'google.com'}>Sign Up</a>
                        </div>
                        <div className={'navItem'}>
                            <a className={'activeLink'} href={'google.com'}>Roll In</a>
                        </div>
                    </Navigation>
                </Container>
            </StyledHeader>
        );
    }
}
