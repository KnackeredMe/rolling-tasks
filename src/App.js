import {Component} from "react/cjs/react.production.min";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import {Landing} from "./Components/Landing/Landing";
import Board from "./Components/Board/Board";
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from "./Store/ProtectedRoute";
import {createContext, useState} from "react";

export const CurrentUserContext = createContext({});

function App () {
    const [currentUser, setCurrentUser] = useState({});
    return (
        <div className="App">
            <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
                <Header/>
                <Content>
                    <Switch>
                        <Route exact path="/rolling-tasks">
                            <Landing/>
                        </Route>
                        <ProtectedRoute path="/board" component={Board}/>
                    </Switch>
                </Content>
            </CurrentUserContext.Provider>

        </div>
    );

}

export default App;