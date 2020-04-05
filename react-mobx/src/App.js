import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import MbButton from "./component/MbButton";
import DisplayCounter from "./component/DisplayCounter";

import Temperature, {counter, appState, todos, t, temps} from './store'
import MobxExample from "./component/MobxExample";
import ListTodos from "./component/ListTodos";
import {TemperatureComponent, TemperaturesComponent} from './component/MobxExample2'
import TemperatureInput from "./component/TemperatureInput";
import {observable} from "mobx";




function App() {
    return (
        <Fragment>
            <MbButton click={counter.decrement}>+</MbButton>
            <DisplayCounter counterStore={counter}/>
            <MbButton click={counter.increment}>+</MbButton>
            <br/>
            <span>{counter.doubleCount}</span>

            <ListTodos todos={todos}></ListTodos>
            <MobxExample store={appState}></MobxExample>
            <TemperatureComponent temperature={t}></TemperatureComponent>
            <input type="text" onChange={(e) => t.temperatureCelsius = e.target.value}/>
            <button onClick={() => t.setTemperatureCelsius("C")}>°C</button>
            <button onClick={() => t.setTemperatureCelsius("F")}>°C</button>
            <button onClick={() => t.setTemperatureCelsius("K")}>°C</button>

            <br/><br/>

            <TemperaturesComponent temperatures={temps}></TemperaturesComponent>


            <br/><br/>

            <TemperatureInput temperatures={temperatures}></TemperatureInput>
        </Fragment>
    );
}

export default App;
