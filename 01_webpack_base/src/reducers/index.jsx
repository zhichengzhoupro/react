import {applyMiddleware, combineReducers, compose} from 'redux'
import cart from './cart'
import thunk from "redux-thunk";
import inputReducer from "./reducer"
import blog from "./blog"


export default combineReducers({
    cart,
    inputReducer,
    blog
})