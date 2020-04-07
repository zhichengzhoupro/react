import {observable} from "mobx";
import {createContext} from "react";

class CounterStore {
    @observable count = 0
}

const CounterStoreContext =  createContext(new CounterStore());
export default  CounterStoreContext;