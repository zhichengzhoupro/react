import * as ActionTypes from "../actions/action.type"

const defaultState = {
    inputValue: 'write something',
    list: [
    ]
}

export default (state =  defaultState, action) => {

    // Reducer里只能接受接受state 不能改变state
    if(action.type === ActionTypes.CHANGE_INPUT_VALUE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
   } else  if(action.type === ActionTypes.ADD_INPUT_VALUE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = "";
        newState.list.push(action.value);
        return newState;
    } else if(action.type === ActionTypes.REMOVE_INPUT_VALUE) {
        let newState = JSON.parse(JSON.stringify(state));

        newState.list.splice(action.value, 1);
        //newState.list = newState.list.filter((item,index )=> {

          //  return  index !== action.value
         //});
        return newState;
    } else if(action.type === ActionTypes.GET_INPUT_LIST_VALUE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value.map(item => item.message);
        newState.inputValue = "hello wolrd";
        return newState
    }
    return state;
}