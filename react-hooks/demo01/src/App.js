import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Example from "./component/Example";
import Example2 from "./component/Example02";
import Example3 from "./component/Example03";
import Example4 from "./component/Example4";

function App() {
    return (
        <Fragment>
            <Example></Example> <br/>
            <Example2></Example2>
            <Example3></Example3>
            <Example4></Example4>
        </Fragment>
    );
}

export default App;
