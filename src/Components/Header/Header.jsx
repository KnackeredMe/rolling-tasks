import React, {useState} from 'react';
import {Container} from "../Container/Container";
import {Logo} from "../Logo/Logo";
import {StyledHeader} from "./Header.styled";
import Navigation from "./Navigation/Navigation";
import RegistrationForm from "../Forms/RegistrationForm/RegistrationForm";
import {Link, useHistory} from "react-router-dom";
import RollinForm from "../Forms/RollInForm/RollinForm";
import { Switch, Route } from 'react-router-dom';
import rollOutIcon from "../../Assets/Images/rollOutIcon.svg"


function Header() {
    const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);
    const [isRollinFormOpen, setIsRollinFormOpen] = useState(false)
    const history = useHistory()

    const openRegistrationForm = () => {
        setIsRegistrationFormOpen(true);
    }
    const closeRegistrationForm = () =>{
        setIsRegistrationFormOpen(false)
    }
    const openRollinForm = () => {
        setIsRollinFormOpen(true);
    }
    const closeRollinForm = () =>{
        setIsRollinFormOpen(false);
    }
    const rollOut = () => {
        localStorage.clear()
        history.push('/rolling-tasks');
    }

    return (
        <StyledHeader>
            <Container>
                <Link to={"/rolling-tasks"}><Logo/></Link>
                <Navigation>
                    <Switch>
                        <Route exact path={'/rolling-tasks'}>
                            <div className={'navItem'}>
                                <a onClick={openRegistrationForm}>Sign Up</a>
                            </div>
                            <div className={'navItem'}>
                                <a className={'activeLink'} onClick={openRollinForm}>Roll In</a>
                            </div>
                        </Route>
                        <Route path={'/board'}>
                            <div className={'navItem'}>
                                <a onClick={rollOut}>Roll Out <img className={'rollOutIcon'} src={rollOutIcon} alt={'rollOut'}/></a>
                            </div>
                        </Route>
                    </Switch>
                </Navigation>
            </Container>
            <RegistrationForm open={isRegistrationFormOpen} handleClose={closeRegistrationForm}/>
            <RollinForm open={isRollinFormOpen} handleClose={closeRollinForm}/>
        </StyledHeader>
    );
}

export default Header;
