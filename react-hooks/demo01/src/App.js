import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.scss';
import Example from "./component/Example";
import Example2 from "./component/Example02";
import Example3 from "./component/Example03";
import Example4 from "./component/Example4";
import Example5 from "./component/Example5";
import Example6 from "./component/Example6";
import Example7 from "./component/example7/Example7";
import Example8 from "./component/example8/Parent";
import Example9 from "./component/example9/Example9";
import Example10 from "./component/example10/Example10";


const Index = () => {
    useEffect(() => {
        console.log('useEffect => this is page d acceuil')

        return () => {
            console.log('index : componentWillUnmount')
        }
    }, []);

    return (
        <h2>index</h2>
    )
};

const List = () => {

    useEffect(() => {
        console.log('useEffect => this is page d list')
    });
    return (
        <h2>list</h2>
    )
};

function App() {
    return (
        <Router>
            <div className={'nav-container'}>
                <ul className={'navigation-list'}>
                    <li><Link to={'/'}>Acceuil</Link></li>
                    <li><Link to={'/list'}>list</Link></li>
                    <li><Link to={'/Example2'}>example2</Link></li>
                    <li><Link to={'/Example3'}>example3</Link></li>
                    <li><Link to={'/Example4'}>example4</Link></li>
                    <li><Link to={'/Example5'}>example5</Link></li>
                    <li><Link to={'/Example6'}>example6</Link></li>
                    <li><Link to={'/Example7'}>example7</Link></li>
                    <li><Link to={'/Example8'}>example8</Link></li>
                    <li><Link to={'/Example9'}>example9</Link></li>
                    <li><Link to={'/Example10'}>example10</Link></li>
                </ul>
            </div>
            <div className={'demo-container'}>
                <Switch>
                    <Route component={Index} exact path={"/"}/>
                    <Route component={List} path={"/list"}/>
                    <Route component={Example} path={"/Example"}/>
                    <Route component={Example2} path={"/Example2"}/>
                    <Route component={Example3} path={"/Example3"}/>
                    <Route component={Example4} path={"/Example4"}/>
                    <Route component={Example5} path={"/Example5"}/>
                    <Route component={Example6} path={"/Example6"}/>
                    <Route component={Example7} path={"/Example7"}/>
                    <Route component={Example8} path={"/Example8"}/>
                    <Route component={Example9} path={"/Example9"}/>
                    <Route component={Example10} path={"/Example10"}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
