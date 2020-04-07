import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {observer} from "mobx-react";
import CounterStoreContext from "./stores/CounterStore";

const App = observer(() => {
    const counterStore = useContext(CounterStoreContext);
    return (
        <>
            <span>{counterStore.count}</span>
            <button onClick={() => counterStore.count++}>counter ++ </button>
        </>
    );
});

export default App;
