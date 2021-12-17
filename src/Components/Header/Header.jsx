import React, {Component, useState} from 'react';
import {Container} from "../Container/Container";
import {Logo} from "../Logo/Logo";
import {StyledHeader} from "./Header.styled";
import Navigation from "./Navigation/Navigation";
import RegistrationForm from "../Forms/RegistrationForm/RegistrationForm";
import {Link} from "react-router-dom";


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
                    <Link to={"/rolling-tasks"}><Logo/></Link>
                    <Navigation>
                        <div className={'navItem'}>
                            <a onClick={this.openRegistrationForm}>Sign Up</a>
                        </div>
                        <div className={'navItem'}>
                            <a className={'activeLink'} href={''}>Roll In</a>
                        </div>
                    </Navigation>

                </Container>
                <RegistrationForm open={isRegistrationFormOpen} handleClose={this.closeRegistrationForm}/>
            </StyledHeader>
        );
    }
}
