import * as ActionTypes from '../actions/action.type'

const initState = {
   list: [ {
        userId : 1,
        id: 1,
        title: 'title 1',
        body: "blog body"
    },
    {
        userId : 1,
        id: 2,
        title: 'title 2',
        body: "blog body 2"
    }],
    isLoading : false,
    errorMessge : ''
}

export default (state =  initState, action) => {
    switch (action.type) {
        default:
            return state;
        case ActionTypes.START_FETCH_BLOG_LIST:
            return {
                ...state,
                isLoading: true

            }
        case ActionTypes.FETCH_BLOG_LIST_SUCCESS:
            return {
                list: action.payload.list,
                isLoading: action.payload.isLoading
            }
        case ActionTypes.FETCH_BLOG_LIST_FAILED:
            return {
                list: action.payload.list,
                isLoading: action.payload.isLoading,
                errorMessge:  action.payload.erroMessge
            }
    }
}