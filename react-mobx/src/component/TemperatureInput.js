import React, {Component} from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";

@observer
class TemperatureInput extends Component {
    @observable input=""


    render() {
        return (
           <li>
               Destionation
               <input type="text" onChange={this.onChange} value={this.input}/>
               <button onClick={}></button>
           </li>
        );
    }
}

const App = observer(({temperatures}) => {
    return (
        <TemperatureInput temperatures={temperatures}></TemperatureInput>
    )
});

export default App;