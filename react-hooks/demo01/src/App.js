import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
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
                <li><Link to={'/Example2'}>example2</Link></li>
                <li><Link to={'/Example3'}>example3</Link></li>
                <li><Link to={'/Example4'}>example4</Link></li>
            </ul>
            <Switch>
                <Route component={index} exact path={"/"}/>
                <Route component={index} exact path={"/list"}/>
                <Route component={Example} exact path={"/Example"}/>
                <Route component={Example2} exact path={"/Example2"}/>
                <Route component={Example3} exact path={"/Example3"}/>
                <Route component={Example4} exact path={"/Example4"}/>
            </Switch>
        </Router>
    );
}

export default App;
