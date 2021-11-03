import {Component} from "react/cjs/react.production.min";
import {Header} from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import {Landing} from "./Components/Landing/Landing";
import Board from "./Components/Board/Board";
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <Content>
                <Switch>
                    <Route path={'/board'} component={Board}/>
                    <Route path={'/'} component={Landing}/>
                </Switch>
            </Content>
        </div>
    );
  }
}

export default App;
