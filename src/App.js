import {Component} from "react/cjs/react.production.min";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import {Landing} from "./Components/Landing/Landing";
import Board from "./Components/Board/Board";
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from "./Store/ProtectedRoute";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <Content>
                <Switch>
                    <Route exact path="/rolling-tasks">
                        <Landing/>
                    </Route>
                    <ProtectedRoute path="/board" component={Board}/>
                </Switch>
            </Content>
        </div>
    );
  }
}

export default App;
