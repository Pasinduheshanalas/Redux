import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Component1 from "./functional/component1";
import Container from "./container/container";
import Header from "./container/header";
// import history from "./utill/history";
import Hooks_container1 from "./hooks/Hooks_container1";

import {createMemoryHistory} from 'history';

class Routes1 extends Component {
    render(){
        return(
            <div>
                <Router>
                    <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component = {Container}/>
                        <Route path="/component/:id" render={(props) => <Component1 {...props}/> }/>
                        <Route  path="/hooksContainer" component = {Hooks_container1}/>
                    </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
export default Routes1;