import React, {Component, useState} from 'react';
import {Container} from "../Container/Container";
import {Logo} from "../Logo/Logo";
import {StyledHeader} from "./Header.styled";
import Navigation from "./Navigation/Navigation";
import RegistrationForm from "../Forms/RegistrationForm/RegistrationForm";


export class Header extends Component {
    constructor() {
        super();
        this.state = {
            isRegistrationFormOpen: false
        }
    }
    openRegistrationForm = () => {
        this.setState({isRegistrationFormOpen: true})
    }
    closeRegistrationForm = () =>{
        this.setState({isRegistrationFormOpen: false})
    }


   render() {
        const isRegistrationFormOpen = this.state.isRegistrationFormOpen;
        return (
            <StyledHeader>
                <Container>
                    <Logo/>
                    <Navigation>
                        <div className={'navItem'}>
                            <button onClick={this.openRegistrationForm}>Sign Up</button>
                        </div>
                        <div className={'navItem'}>
                            <a className={'activeLink'} href={'google.com'}>Roll In</a>
                        </div>
                    </Navigation>

                </Container>
                <RegistrationForm open={isRegistrationFormOpen} handleClose={this.closeRegistrationForm}/>
            </StyledHeader>
        );
    }
}
