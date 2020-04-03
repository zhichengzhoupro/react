import * as ActionTypes from './action.type'
import {getPosts} from "../services";
import Axios from "axios";

export const changeInputAction = (value) => {
    return {
        type: ActionTypes.CHANGE_INPUT_VALUE,
        value
    }
}

export const addInputAction = (value) => {
    return {
        type: ActionTypes.ADD_INPUT_VALUE,
        value
    }
}

export const removeInputAction = (value) => {
    return {
        type: ActionTypes.REMOVE_INPUT_VALUE,
        value
    }
}

export const getInputListAction = (data) => {
    return {
        type: ActionTypes.GET_INPUT_LIST_VALUE,
        value: data
    }
}

export const getToDoListThunk = () => {
    return (dispatch) => {
        Axios.get("http://localhost:3000/todo").then((res)=>{
            const data = res.data;
            const action = getInputListAction(data);
            dispatch(action);
        })
    }
}


export const increment = (id) => {
    return {
        type: ActionTypes.CART_AMOUNT_INCREMENT,
        payload: {
            id
        }
    }

}

export const decrement = (id) => {
    return {
        type: ActionTypes.CART_AMOUNT_DECREMENT,
        payload: {
            id
        }
    }
}

export const decrementAsync = (id) => {
    return (dispatch) => {
        setTimeout(() =>{
            dispatch( {
                type: ActionTypes.CART_AMOUNT_DECREMENT,
                payload: {
                    id
                }
            });
        },  3000)
    }
}

const startFetchBlogList = () => {
    return {
        type: ActionTypes.START_FETCH_BLOG_LIST
    }
}

const fetchBlogListSuccess = (data) => {
    return {
        type: ActionTypes.FETCH_BLOG_LIST_SUCCESS,
        payload: data
    }
}

const fetchBlogListFailed = (data) => {
    return {
        type: ActionTypes.FETCH_BLOG_LIST_FAILED,
        payload: data
    }
}

export const fetchBlogList = () => dispatch => {
    dispatch(startFetchBlogList())
    getPosts().then((resp) => {
        if(resp.status === 200) {
            dispatch(fetchBlogListSuccess({
                list : resp.data,
                isLoading: false
            }));
        }

    }).catch(error => {
        console.log(error, error);
        dispatch(fetchBlogListFailed({
            isLoading: false,
            errorMessage: error.message()
        }));
        console.log(error);
    })
};




