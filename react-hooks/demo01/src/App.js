import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
import Example from "./component/Example";
import Example2 from "./component/Example02";
import Example3 from "./component/Example03";
import Example4 from "./component/Example4";


const index = () =>{
    return(
        <h2>index</h2>
    )
};

const list = () =>{
    return(
        <h2>list</h2>
    )
};

function App() {
    return (
        <Router>
            <ul>
                <li><Link to={'/'}>Acceuil</Link> </li>
                <li><Link to={'/list'}>list</Link></li>
                <li><Link to={'/example2'}>example2</Link></li>
            </ul>
            <Switch>
                <Route component={index} exact path={"/"}/>
                <Route component={index} exact path={"/"}/>
            </Switch>

            <Example/>
            <Example2/>
            <Example3/>
            <Example4/>
        </Router>
    );
}

export default App;
