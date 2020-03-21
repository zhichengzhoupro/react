import {createStore, applyMiddleware, compose} from "redux";
import reducer from "../reducers/index";
import thunk from "redux-thunk";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose

const enhancer = composeEnhancer(applyMiddleware(thunk))

const store = createStore(reducer, enhancer);

export default store;