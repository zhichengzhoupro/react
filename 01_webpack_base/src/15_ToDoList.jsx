import React, {Component} from 'react';
import store from "./store/index"
import * as ActionCreators from "./actions/ActionCreators"
import ToDoListUI from "./16_ToDoListUI";
import inputReducer from "./reducers/reducer";

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState().inputReducer;
        this.changeInputValue = this.changeInputValue.bind(this);
        this.addInputValue = this.addInputValue.bind(this);
        store.subscribe(this.changeState);
    }

    componentDidMount() {
        const action = ActionCreators.getToDoListThunk();
        store.dispatch(action);
    }


    //   this.changeInputValue = this.changeInputValue.bind(this);
    // 因为这句话 this 指针被改变了方向
   changeInputValue(e) {
        const action = ActionCreators.changeInputAction(e.target.value);
        store.dispatch(action);

   }

    addInputValue(e) {
        const action = ActionCreators.addInputAction(this.state.inputValue);
        store.dispatch(action);
    }

   changeState = ()=> {
        this.setState(store.getState().inputReducer);
   }

    removeItem = (index) => {
        const action = ActionCreators.removeInputAction(index);
        store.dispatch(action);

    }

    render() {
        return (
            <ToDoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addInputValue={this.addInputValue}
                list={this.state.list}
                removeItem={this.removeItem}
            ></ToDoListUI>
        );
    }
}

export default ToDoList;