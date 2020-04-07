import React, {createContext, Fragment, useContext, useReducer} from 'react';


const Context = createContext();

const DisplayText = () => {
    let count = useContext(Context);
    return (
        <h2>I've received {count} from parent</h2>
    )

};

const ReducerDemo = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <Fragment>
            <span>You have click {count} times</span><br/>
            <button onClick={() => {
                dispatch({type: 'add'})
            }}>Click to Add Count
            </button>
            <button onClick={() => {
                dispatch({type: 'substract'})
            }}>Click to substract Count
            </button>
            <br/>
            <Context.Provider value={count}>
                <DisplayText/>
            </Context.Provider>

        </Fragment>
    )
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'substract':
            return state - 1;
        default:
            return state;
    }
};

export default ReducerDemo;